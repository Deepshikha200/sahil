import { Container, Row, Col } from 'react-bootstrap';
import { profile } from '../../../data/profile';
import Button from '../../ui/Button/Button';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg" />
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={8} xl={7}>
            <p className="hero__greeting">Hi, I&apos;m</p>
            <h1 className="hero__name">{profile.name}</h1>
            <h2 className="hero__title">{profile.title}</h2>
            <p className="hero__location">
              <span className="hero__location-icon">&#9679;</span>
              {profile.location}
            </p>
            <div className="hero__relocation-group">
              <p className="hero__relocation">{profile.relocation}</p>
              <p className="hero__relocation hero__relocation--secondary">
                {profile.relocation2}
              </p>
            </div>
            <p className="hero__tagline">
              Building scalable, production-grade systems with .NET, React &amp; cloud technologies.
            </p>
            <div className="hero__cta d-flex flex-wrap gap-3">
              <Button href="#projects">View Projects</Button>
              <Button href="#contact" variant="outline-danger">
                Contact Me
              </Button>
              <Button
                href={profile.github}
                variant="outline-danger"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            </div>
          </Col>
          <Col lg={4} xl={5} className="d-none d-lg-flex justify-content-center">
            <div className="hero__visual">
              <div className="hero__visual-ring" />
              <div className="hero__visual-inner">
                <span className="hero__initials">SS</span>
                <span className="hero__visual-role">.NET Engineer</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
