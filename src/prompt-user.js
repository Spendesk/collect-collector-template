const _ = require("lodash");
const inquirer = require("inquirer");

module.exports = (argv, existingManifestJson, existingPackageJson) => {
  function showQuestion(answers) {
    return !argv["non-interactive"];
  }

  return inquirer.prompt([
    {
      type: "text",
      name: "name",
      message: "Collector human redable name (e.g. 'LinkedIn Ads')",
      validate: input => {
        return input.match(/[a-zA-Z][a-zA-Z0-9]+/) !== null;
      },
      default: existingManifestJson.name,
      when: showQuestion
    },
    {
      type: "text",
      name: "package_name",
      message: "Package name",
      default: data => {
        return (
          existingPackageJson.name ||
          `spendesk-${_.kebabCase(data.name)}-collector`
        );
      },
      when: showQuestion
    }
  ]);
};
