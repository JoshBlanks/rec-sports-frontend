import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './NavBar';
import { APP_CONFIG } from '../../constants';

// Simple test to verify Jest is working
describe('NavBar', () => {
  test('renders without crashing', () => {
    render(<NavBar />);
    
    // Just check that the component renders
    expect(document.body).toBeInTheDocument();
  });

  test('renders the company name in navbar header', () => {
    render(<NavBar />);
    
    // Look for the brand name specifically in the h2 element
    expect(screen.getByRole('heading', { name: APP_CONFIG.COMPANY_NAME })).toBeInTheDocument();
  });

  test('renders the company logo text from constants', () => {
    render(<NavBar />);
    
    // Look for the logo text from constants
    expect(screen.getByText(APP_CONFIG.COMPANY_LOGO_TEXT)).toBeInTheDocument();
  });

  test('renders with user prop that has avatar', () => {
    const mockUser = {
      id: '1',
      name: 'John Doe',
      avatar: 'https://example.com/avatar.jpg'
    };

    render(<NavBar user={mockUser} />);
    
    // Should render the user name
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});