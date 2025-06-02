import React from 'react';
import './ContentSections.scss';

interface Sport {
  name: string;
  description: string;
}

interface ContentSectionsProps {
  aboutTitle?: string;
  aboutDescription?: string;
  sportsTitle?: string;
  sports?: Sport[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  onCtaClick?: () => void;
}

const ContentSections: React.FC<ContentSectionsProps> = ({
  aboutTitle = 'About Our League',
  aboutDescription = "We're dedicated to creating inclusive, competitive, and fun sporting experiences for adults of all skill levels. Our leagues emphasize community building while maintaining the competitive spirit that makes sports exciting.",
  sportsTitle = 'Popular Sports',
  sports = [
    {
      name: 'Soccer',
      description: 'Join competitive soccer leagues with players of all skill levels.',
    },
    {
      name: 'Basketball',
      description: 'Join competitive basketball leagues with players of all skill levels.',
    },
    {
      name: 'Volleyball',
      description: 'Join competitive volleyball leagues with players of all skill levels.',
    },
  ],
  ctaTitle = 'Ready to Join?',
  ctaDescription = 'Sign up today and start playing with like-minded athletes in your area.',
  ctaButtonText = 'Get Started',
  onCtaClick,
}) => {
  return (
    <>
      {/* About Section */}
      <section className="content-section content-section--white">
        <div className="content-section__container">
          <div className="content-section__content">
            <h2 className="content-section__title">{aboutTitle}</h2>
            <p className="content-section__description">
              {aboutDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="content-section content-section--gray">
        <div className="content-section__container">
          <div className="content-section__content">
            <h2 className="content-section__title">{sportsTitle}</h2>
            <div className="sports-grid">
              {sports.map((sport) => (
                <div key={sport.name} className="sports-grid__card">
                  <h3 className="sports-grid__title">{sport.name}</h3>
                  <p className="sports-grid__description">{sport.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section content-section--purple">
        <div className="content-section__container">
          <div className="content-section__content content-section__content--center">
            <h2 className="content-section__title content-section__title--white">
              {ctaTitle}
            </h2>
            <p className="content-section__description content-section__description--white">
              {ctaDescription}
            </p>
            <button 
              className="content-section__cta-button"
              onClick={onCtaClick}
            >
              {ctaButtonText}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSections;