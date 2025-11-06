import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Task to inject test suite data to thread that is executing cypress.
      on("task", {
        setTestSuite(testSuite) {
          // Store test suite data for use in tests
          config.env.TEST_SUITE = JSON.stringify(testSuite);
          return null;
        },

        log(message) {
          console.log(message);
          return null;
        },
      });

      return config;
    },

    // Default configuration
    baseUrl: undefined, // Will be set dynamically from test suite
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false, // Disable video for faster execution
    screenshotOnRunFailure: true,

    // Timeout configurations
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    requestTimeout: 10000,

    // Test pattern - point to our dynamic base spec
    specPattern: "cypress/e2e/baseSpec.cy.ts",

    // Environment variables
    env: {
      // TEST_SUITE will be injected here
    },
  },
});
