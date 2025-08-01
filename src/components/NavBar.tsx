// NavBar.tsx
import React, { useState } from 'react';
import './NavBar.css';

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${className}`}>
      <div className="navbar-container">
        {/* Logo/Brand */}
        <div className="navbar-brand">
          <a href="/" className="brand-link">
            Sports League
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-nav">
          <a href="/dashboard" className="nav-link">Dashboard</a>
          <a href="/teams" className="nav-link">Teams</a>
          <a href="/leagues" className="nav-link">Leagues</a>
          <a href="/schedule" className="nav-link">Schedule</a>
          <a href="/profile" className="nav-link">Profile</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="/dashboard" className="mobile-nav-link" onClick={closeMobileMenu}>
          Dashboard
        </a>
        <a href="/teams" className="mobile-nav-link" onClick={closeMobileMenu}>
          Teams
        </a>
        <a href="/leagues" className="mobile-nav-link" onClick={closeMobileMenu}>
          Leagues
        </a>
        <a href="/schedule" className="mobile-nav-link" onClick={closeMobileMenu}>
          Schedule
        </a>
        <a href="/profile" className="mobile-nav-link" onClick={closeMobileMenu}>
          Profile
        </a>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu}></div>
      )}
    </nav>
  );
};

export default NavBar;