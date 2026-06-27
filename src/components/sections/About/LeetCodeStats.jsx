import { useTheme } from '../../../context/ThemeContext';
import './LeetCodeStats.scss';

const LEETCODE_USERNAME = 'Sahilsahu-leet';
const LEETCODE_PROFILE_URL = `https://leetcode.com/u/${LEETCODE_USERNAME}/`;

const LeetCodeStats = () => {
  const { theme } = useTheme();
  const cardUrl = `https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=${theme}&font=Signika%20Negative`;

  return (
    <div className={`leetcode-stats leetcode-stats--${theme}`}>
      <div className="leetcode-stats__header">
        <h3 className="leetcode-stats__title">LeetCode</h3>
        <a
          href={LEETCODE_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="leetcode-stats__profile"
        >
          @{LEETCODE_USERNAME}
        </a>
      </div>
      <a
        href={LEETCODE_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="leetcode-stats__card-link"
      >
        <img
          key={theme}
          src={cardUrl}
          alt="LeetCode Stats"
          className="leetcode-stats__card-img"
        />
      </a>
    </div>
  );
};

export default LeetCodeStats;
