import { useState } from 'react';
import './NavBar.css';
import { APP_CONFIG, NAVIGATION_ITEMS } from '../../constants';

interface User {
  id: string;
  name: string;
  avatar?: string;
}

interface NavBarProps {
  user?: User;
  onLogout?: () => void;
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ 
  user = { id: '1', name: 'John Doe' }, 
  onLogout,
  className = '' 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = (): void => {
    if (onLogout) {
      onLogout();
    }
    closeMobileMenu();
  };

  // Get user initials for avatar fallback
  const getUserInitials = (name: string): string => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="mobile-brand">
          {APP_CONFIG.COMPANY_NAME}
        </div>
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>

      {/* Side Navigation */}
      <nav className={`navbar ${isMobileMenuOpen ? 'mobile-open' : ''} ${className}`}>
        {/* Logo/Brand Section */}
        <div className="navbar-header">
          <div className="brand-section">
            <div className="brand-logo">
              <div className="logo-icon">{APP_CONFIG.COMPANY_LOGO_TEXT}</div>
            </div>
            <h2 className="brand-name">{APP_CONFIG.COMPANY_NAME}</h2>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="navbar-content">
          <div className="nav-section">
            <ul className="nav-list">
              {NAVIGATION_ITEMS.map((item, index) => (
                <li key={index} className="nav-item">
                  <a href={item.href} className="nav-link" onClick={closeMobileMenu}>
                    <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon === 'dashboard' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                      )}
                      {item.icon === 'profile' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      )}
                      {item.icon === 'messages' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      )}
                      {item.icon === 'settings' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      )}
                    </svg>
                    <span className="nav-text">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* User Section */}
        <div className="navbar-footer">
          <div className="user-section">
            <div className="user-info">
              <div className="user-avatar">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="avatar-image" />
                ) : (
                  <div className="avatar-fallback">
                    {getUserInitials(user.name)}
                  </div>
                )}
              </div>
              <div className="user-details">
                <span className="user-name">{user.name}</span>
              </div>
            </div>
            <button 
              className="logout-button"
              onClick={handleLogout}
              aria-label="Logout"
              title="Logout"
            >
              <svg className="logout-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu}></div>
      )}
    </>
  );
};

export default NavBar;