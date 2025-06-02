import React from 'react';
import './HeroSection.scss';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = 'Join the Game,',
  subtitle = 'Build Community',
  description = 'Connect with local athletes, join competitive leagues, and experience the thrill of organized sports in your community.',
  primaryButtonText = 'Find a League',
  secondaryButtonText = 'Learn More',
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <div className="hero-section">
      {/* Background Pattern */}
      <div className="hero-section__background">
        <div className="hero-section__pattern"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-section__content">
        <div className="hero-section__wrapper">
          <h1 className="hero-section__title">
            {title}<br />
            <span className="hero-section__title-gradient">
              {subtitle}
            </span>
          </h1>
          <p className="hero-section__description">
            {description}
          </p>
          <div className="hero-section__actions">
            <button 
              className="hero-section__button hero-section__button--primary"
              onClick={onPrimaryClick}
            >
              {primaryButtonText}
            </button>
            <button 
              className="hero-section__button hero-section__button--secondary"
              onClick={onSecondaryClick}
            >
              {secondaryButtonText}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-section__scroll-indicator">
        <svg className="hero-section__scroll-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;