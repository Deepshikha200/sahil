import { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { profile } from '../../../data/profile';
import Button from '../../ui/Button/Button';
import ThemeToggle from '../../ui/ThemeToggle/ThemeToggle';
import './Header.scss';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <Navbar expand="lg" className="header__navbar" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#hero" className="header__brand">
            <span className="header__brand-accent">S</span>S
          </Navbar.Brand>

          <div className="header__actions d-flex align-items-center gap-3 order-lg-2">
            <ThemeToggle />
            <Navbar.Toggle aria-controls="main-nav" className="header__toggle" />
          </div>

          <Navbar.Collapse id="main-nav" className="order-lg-1">
            <Nav className="ms-lg-auto align-items-lg-center header__nav">
              {profile.navLinks.map((link) => (
                <Nav.Link key={link.href} href={link.href} className="header__link">
                  {link.label}
                </Nav.Link>
              ))}
              {/* <Button href="#contact" className="header__cta">
                Hire Me
              </Button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
