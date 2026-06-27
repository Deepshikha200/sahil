import { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { profile } from '../../../data/profile';
import ThemeToggle from '../../ui/ThemeToggle/ThemeToggle';
import './Header.scss';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  const renderNavLinks = (onNavigate) =>
    profile.navLinks.map((link) => (
      <Nav.Link
        key={link.href}
        href={link.href}
        className="header__link"
        onClick={onNavigate}
      >
        {link.label}
      </Nav.Link>
    ));

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <Navbar expand="lg" className="header__navbar">
          <Container>
            <Navbar.Brand href="#hero" className="header__brand" onClick={closeMenu}>
              <span className="header__brand-accent">S</span>S
            </Navbar.Brand>


            <Nav className="ms-lg-auto align-items-lg-center header__nav d-none d-lg-flex">
              {renderNavLinks()}
            </Nav>
            <div className="header__actions">
              <button
                type="button"
                className={`header__hamburger d-lg-none${menuOpen ? ' header__hamburger--open' : ''}`}
                onClick={toggleMenu}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                <span className="header__hamburger-line" />
                <span className="header__hamburger-line" />
                <span className="header__hamburger-line" />
              </button>
              <ThemeToggle />
            </div>
          </Container>
        </Navbar>
      </header>

      <div
        className={`header__overlay${menuOpen ? ' header__overlay--visible' : ''}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      <aside
        id="mobile-nav"
        className={`header__sidebar${menuOpen ? ' header__sidebar--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <Nav className="header__sidebar-nav flex-column">
          {renderNavLinks(closeMenu)}
        </Nav>
      </aside>
    </>
  );
};

export default Header;
