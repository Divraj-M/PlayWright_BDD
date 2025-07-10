module.exports = {
  default: {
    formatOptions: {
      snippetInterface: "async-await"
    },
    paths: ["src/test/features/*.feature"],
    requireModule: ["ts-node/register"],
    require: ["src/test/steps/**/*.ts", "src/hooks/**/*.ts"],
    dryRun: false,
    format: [
      "progress-bar",
      "html:reports/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "rerun:@rerun.txt"
    ],
    // publishQuiet: true,
    parallel: 5
  },

  rerun: {
    requireModule: ["ts-node/register"],
    require: ["src/test/steps/**/*.ts", "src/hooks/**/*.ts"],
    paths: ["@rerun.txt"],
    format: [
      "progress-bar",
      "html:reports/rerun-report.html",
      "json:test-results/rerun-report.json"
    ],
    publishQuiet: true
  }
};
