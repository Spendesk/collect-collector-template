const _ = require("lodash");
const templateVersion = require("./../package.json").version;

module.exports = (
  argv,
  userAnswers,
  existingManifestJson,
  existingPackageJson
) => {
  const forcedData = {
    version: existingPackageJson.version || "0.0.1",
    template_version: templateVersion
  };

  if (argv["non-interactive"]) {
    userAnswers = {
      name: `${_.startCase(_.camelCase(argv.name))}`,
      package_name: `spendesk-${_.kebabCase(argv.name)}-collector`
    };
  }

  return _.defaults({}, forcedData, userAnswers);
};
