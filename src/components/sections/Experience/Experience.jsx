import { Container } from 'react-bootstrap';
import { profile } from '../../../data/profile';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import './Experience.scss';

const Experience = () => {
  return (
    <section className="experience section section--alt" id="experience">
      <Container>
        <SectionTitle subtitle="Career" title="Work Experience" />
        <div className="experience__timeline">
          {profile.experience.map((job, index) => (
            <div key={`${job.role}-${job.period}`} className="experience__item">
              <div className="experience__marker">
                <span className="experience__dot" />
                {index < profile.experience.length - 1 && (
                  <span className="experience__line" />
                )}
              </div>
              <div className="experience__content">
                <div className="experience__header">
                  <div>
                    <h3 className="experience__role">{job.role}</h3>
                    <p className="experience__company">
                      {job.company}
                      {job.client && (
                        <span className="experience__client">
                          {' '}&mdash;{' '}
                          {job.clientLink ? (
                            <a
                              href={job.clientLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="experience__client-link"
                            >
                              {job.client}
                            </a>
                          ) : (
                            job.client
                          )}
                        </span>
                      )}
                    </p>
                  </div>
                  <span className="experience__period">{job.period}</span>
                </div>

                {job.stack && (
                  <p className="experience__stack">{job.stack}</p>
                )}

                {job.link && !job.clientLink && (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience__link"
                  >
                    {job.link.replace('https://', '')}
                  </a>
                )}

                {job.highlights && !job.projects && (
                  <ul className="experience__list">
                    {job.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {job.projects?.map((project) => (
                  <div key={project.name} className="experience__project">
                    <h4 className="experience__project-name">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.name}
                        </a>
                      ) : (
                        project.name
                      )}
                    </h4>
                    {project.stack && (
                      <p className="experience__stack">{project.stack}</p>
                    )}
                    <ul className="experience__list">
                      {project.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                {job.highlights && job.projects && (
                  <div className="experience__additional">
                    <h4 className="experience__project-name">Additional Responsibilities</h4>
                    <ul className="experience__list">
                      {job.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
