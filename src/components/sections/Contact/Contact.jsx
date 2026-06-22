import { Container, Row, Col } from 'react-bootstrap';
import { profile } from '../../../data/profile';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import Button from '../../ui/Button/Button';
import './Contact.scss';

const contactItems = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/con-sahil-sahu',
    href: profile.linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/sahilz123',
    href: profile.github,
    external: true,
  },
  {
    label: 'Location',
    value: profile.location,
  },
  {
    label: 'Relocation',
    value: `${profile.relocation} · ${profile.relocation2}`,
  },
];

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <Container>
        <SectionTitle subtitle="Get In Touch" title="Contact Me" />
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="contact__card">
              <p className="contact__intro">
                I&apos;m open to new opportunities and collaborations. Whether you have a
                project in mind or want to discuss a role, feel free to reach out.
              </p>
              <div className="contact__grid">
                {contactItems.map((item) => (
                  <div key={item.label} className="contact__item">
                    <span className="contact__label">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="contact__value"
                        {...(item.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact__value">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="contact__actions d-flex flex-wrap gap-3 justify-content-center">
                <Button href={`mailto:${profile.email}`}>Send Email</Button>
                <Button
                  href={profile.linkedin}
                  variant="outline-danger"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
