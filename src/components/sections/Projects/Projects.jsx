import { Container, Row, Col, Badge } from 'react-bootstrap';
import { profile } from '../../../data/profile';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import Card from '../../ui/Card/Card';
import './Projects.scss';

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <Container>
        <SectionTitle subtitle="Portfolio" title="Featured Projects" />
        <Row className="g-4">
          {profile.projects.map((project) => (
            <Col key={project.name} xs={12} md={6} lg={4}>
              <Card className="projects__card h-100">
                <div className="card-body d-flex flex-column h-100">
                  <h3 className="projects__name">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                    </a>
                  </h3>
                  <p className="projects__desc flex-grow-1">{project.description}</p>
                  <div className="projects__stack">
                    {project.stack.map((tech) => (
                      <Badge key={tech} className="projects__tech">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
