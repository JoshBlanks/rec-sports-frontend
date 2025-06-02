import Navbar from '@/components/layout/Navbar';
import ContentSections from '@/components/sections/ContentSections';
import HeroSection from '@/components/sections/HeroSection';
import React from 'react';

const HomePage: React.FC = () => {
  const handleFindLeague = () => {
    // Scroll to leagues section or navigate to leagues page
    console.log('Find a League clicked');
  };

  const handleLearnMore = () => {
    // Scroll to about section or navigate to about page
    console.log('Learn More clicked');
  };

  const handleGetStarted = () => {
    // Navigate to registration page
    console.log('Get Started clicked');
  };

  const sportsData = [
    {
      name: 'Soccer',
      description: 'Join competitive soccer leagues with players of all skill levels. Experience the beautiful game in a supportive community environment.',
    },
    {
      name: 'Basketball',
      description: 'Fast-paced basketball leagues for all abilities. From recreational to competitive, find your perfect match on the court.',
    },
    {
      name: 'Volleyball',
      description: 'Spike, set, and serve your way to victory in our inclusive volleyball leagues. Indoor and beach options available.',
    },
  ];

  return (
    <div className="home-page">
      <Navbar />
      <HeroSection 
        onPrimaryClick={handleFindLeague}
        onSecondaryClick={handleLearnMore}
      />
      <ContentSections 
        sports={sportsData}
        onCtaClick={handleGetStarted}
      />
    </div>
  );
};

export default HomePage;