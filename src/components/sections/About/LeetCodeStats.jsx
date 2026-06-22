import { useEffect, useState } from 'react';
import { profile } from '../../../data/profile';
import './LeetCodeStats.scss';

const DIFFICULTIES = [
  { key: 'easy', label: 'Easy', color: '#00b8a3' },
  { key: 'medium', label: 'Medium', color: '#ffc01e' },
  { key: 'hard', label: 'Hard', color: '#ff375f' },
];

const DonutChart = ({ stats, size = 150 }) => {
  const strokeWidth = 22;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;
  const total = stats.easy + stats.medium + stats.hard || 1;

  let accumulated = 0;

  const segments = DIFFICULTIES.map(({ key, color }) => {
    const value = stats[key];
    const length = (value / total) * circumference;
    const offset = accumulated;
    accumulated += length;

    return { key, color, length, offset };
  });

  return (
    <div className="leetcode-stats__chart">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label="LeetCode problems by difficulty">
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--surface-deep, #141414)"
          strokeWidth={strokeWidth}
        />
        <g transform={`rotate(-90 ${center} ${center})`}>
          {segments.map(({ key, color, length, offset }) => (
            <circle
              key={key}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${length} ${circumference}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
              className="leetcode-stats__segment"
            />
          ))}
        </g>
      </svg>
      <div className="leetcode-stats__chart-center">
        <span className="leetcode-stats__total-count">{stats.total}</span>
        <span className="leetcode-stats__total-label">Solved</span>
      </div>
    </div>
  );
};

const LeetCodeStats = () => {
  const { username, profileUrl, fallback } = profile.leetcode;
  const [stats, setStats] = useState(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setStats({
            total: data.totalSolved,
            easy: data.easySolved,
            medium: data.mediumSolved,
            hard: data.hardSolved,
          });
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [username]);

  return (
    <div className="leetcode-stats">
      <div className="leetcode-stats__header">
        <h3 className="leetcode-stats__title">LeetCode</h3>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="leetcode-stats__profile"
        >
          @{username}
        </a>
      </div>

      {loading ? (
        <p className="leetcode-stats__loading">Loading stats...</p>
      ) : (
        <>
          <DonutChart stats={stats} />
          <div className="leetcode-stats__legend">
            {DIFFICULTIES.map(({ key, label, color }) => (
              <div key={key} className="leetcode-stats__legend-item">
                <span className="leetcode-stats__legend-dot" style={{ backgroundColor: color }} />
                <span className="leetcode-stats__legend-label">{label}</span>
                <span className="leetcode-stats__legend-count">{stats[key]}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LeetCodeStats;
