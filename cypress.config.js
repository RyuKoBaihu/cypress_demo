const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  projectId: 'b2sxt4',
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
