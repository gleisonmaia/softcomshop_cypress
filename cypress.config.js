const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  screenshotsFolder: 'screenshots',
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    reportDir: 'cypress/reports',
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    viewportWidth: 1920,
    viewportHeight: 1080, 
    baseUrl: "https://empresamodelo.softcomshop.com.br" 
  },
});
