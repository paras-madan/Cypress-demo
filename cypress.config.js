const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  videoCompression: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});
