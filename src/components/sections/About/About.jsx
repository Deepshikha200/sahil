import { Container, Row, Col } from 'react-bootstrap';
import { profile } from '../../../data/profile';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import './About.scss';

const About = () => {
  return (
    <section className="about section" id="about">
      <Container>
        <SectionTitle subtitle="About Me" title="Professional Summary" />
        <Row className="g-4">
          <Col lg={7}>
            <p className="about__summary">{profile.summary}</p>
            <div className="about__achievements">
              <h3 className="about__subheading">Key Achievements</h3>
              <ul className="about__list">
                {profile.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg={5}>
            <div className="about__sidebar">
              <div className="about__card">
                <h3 className="about__subheading">Education</h3>
                {profile.education.map((edu) => (
                  <div key={edu.degree} className="about__edu-item">
                    <h4 className="about__edu-degree">{edu.degree}</h4>
                    <p className="about__edu-school">{edu.school}</p>
                    <p className="about__edu-meta">
                      {edu.period} &middot; {edu.score}
                    </p>
                  </div>
                ))}
              </div>
              <div className="about__card">
                <h3 className="about__subheading">Certifications</h3>
                <ul className="about__cert-list">
                  {profile.certifications.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
