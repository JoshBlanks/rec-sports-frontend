import React, { useState, useEffect } from 'react';
import './Navbar.scss';

interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: Array<{ label: string; href: string }>;
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { label: 'About', href: '/about' },
    { 
      label: 'Sports', 
      href: '/sports',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Soccer', href: '/sports/soccer' },
        { label: 'Basketball', href: '/sports/basketball' },
        { label: 'Volleyball', href: '/sports/volleyball' },
        { label: 'Softball', href: '/sports/softball' },
        { label: 'Flag Football', href: '/sports/flag-football' },
      ]
    },
    { label: 'Calendar', href: '/calendar' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__content">
          {/* Logo */}
          <div className="navbar__logo">
            <a href="/" className="navbar__logo-link">
              <div className={`navbar__logo-icon ${isScrolled ? 'navbar__logo-icon--scrolled' : ''}`}>
                <svg className="navbar__logo-svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span className={`navbar__logo-text ${isScrolled ? 'navbar__logo-text--scrolled' : ''}`}>
                Sports League
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="navbar__links">
            <div className="navbar__nav-links">
              {navLinks.map((link) => (
                <div key={link.label} className="navbar__nav-item">
                  <button
                    onClick={() => link.hasDropdown && handleDropdownToggle(link.label)}
                    className={`navbar__nav-button ${isScrolled ? 'navbar__nav-button--scrolled' : ''}`}
                  >
                    <span className="navbar__nav-content">
                      <span>{link.label}</span>
                      {link.hasDropdown && (
                        <svg className={`navbar__nav-arrow ${activeDropdown === link.label ? 'navbar__nav-arrow--active' : ''}`} 
                             fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </span>
                    <div className="navbar__nav-underline"></div>
                  </button>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && activeDropdown === link.label && (
                    <div className="navbar__dropdown">
                      {link.dropdownItems?.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="navbar__dropdown-item"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Member Login Button */}
          <div className="navbar__login">
            <a
              href="/login"
              className={`navbar__login-button ${isScrolled ? 'navbar__login-button--scrolled' : ''}`}
            >
              Member Login
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="navbar__mobile">
            <button
              type="button"
              className={`navbar__mobile-button ${isScrolled ? 'navbar__mobile-button--scrolled' : ''}`}
            >
              <svg className="navbar__mobile-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;