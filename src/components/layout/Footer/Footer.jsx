import { Container, Row, Col } from 'react-bootstrap';
import { profile } from '../../../data/profile';
import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="footer__copy mb-0">
              &copy; {year} {profile.name}. All rights reserved.
            </p>
          </Col>
          <Col md={6}>
            <div className="footer__social d-flex justify-content-center justify-content-md-end gap-3">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                Email
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
