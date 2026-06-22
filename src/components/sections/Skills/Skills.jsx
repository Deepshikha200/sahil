import { Container, Row, Col, Badge } from 'react-bootstrap';
import { profile } from '../../../data/profile';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import './Skills.scss';

const Skills = () => {
  return (
    <section className="skills section section--alt" id="skills">
      <Container>
        <SectionTitle subtitle="Expertise" title="Skills & Technologies" />
        <Row className="g-4">
          {profile.skills.map((group) => (
            <Col key={group.category} xs={12} sm={6} lg={4}>
              <div className="skills__card">
                <h3 className="skills__category">{group.category}</h3>
                <div className="skills__badges">
                  {group.items.map((skill) => (
                    <Badge key={skill} bg="dark" className="skills__badge">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
