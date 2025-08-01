export default {
  // Test environment
  testEnvironment: "jsdom",

  // File extensions Jest will process
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],

  // Transform TypeScript files
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },

  // ESM support for Vite
  preset: "ts-jest/presets/default-esm",
  extensionsToTreatAsEsm: [".ts", ".tsx"],

  // Module name mapping for imports
  moduleNameMapper: {
    // Handle CSS imports
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",

    // Handle static assets
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "jest-transform-stub",

    // Handle path aliases (if you use them)
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  // Test file patterns
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.(ts|tsx|js|jsx)",
    "<rootDir>/src/**/*.(test|spec).(ts|tsx|js|jsx)",
  ],

  // Setup files
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],

  // Ignore these directories
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/build/",
  ],

  // Transform ignore patterns for ESM modules
  transformIgnorePatterns: ["node_modules/(?!(.*\\.mjs$))"],

  // Coverage settings (optional)
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/main.tsx",
    "!src/vite-env.d.ts",
  ],

  // TypeScript configuration
  globals: {
    "ts-jest": {
      useESM: true,
      tsconfig: {
        jsx: "react-jsx",
      },
    },
  },
};
