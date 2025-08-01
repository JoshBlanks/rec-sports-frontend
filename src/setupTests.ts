import "@testing-library/jest-dom";

// Basic mocks only - no complex implementations
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock scrollTo to prevent errors
Object.defineProperty(window, "scrollTo", {
  value: jest.fn(),
  writable: true,
});
