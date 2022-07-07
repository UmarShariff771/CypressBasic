const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 720,
  viewportWidth: 1280,
  defaultCommandTimeout: 4000,
  execTimeout: 30000,
  taskTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 5000,
  responseTimeout: 30000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    slowTestThreshold: 10000,
  },
})
