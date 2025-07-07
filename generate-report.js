// generate-report.js
const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'playwright-report/cucumber_report.json',
  output: 'playwright-report/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
};

reporter.generate(options);
console.log('Cucumber report generated successfully!');