module.exports.config = {
  framework: 'custom',
  frameworkPath: 'node_modules/protractor-cucumber-framework',
  restartBrowserBetweenTests: true,

  cucumberOpts: {
    require: ['features/support/**/*.js', 'features/step-definitions/**/*.js'],
    strict: true
  },

  capabilities: {
    browserName: 'chrome',
    specs: 'features/**/*.feature'
  }
};
