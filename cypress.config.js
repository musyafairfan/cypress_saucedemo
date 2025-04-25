const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000,
  },
});
