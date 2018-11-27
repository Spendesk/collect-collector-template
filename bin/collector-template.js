#! /usr/bin/env node

const argv = require("minimist")(process.argv.slice(2));
const gulp = require("gulp");
const conflict = require("gulp-conflict");
const template = require("gulp-template");

const collectorTemplateVersion = require("../package").version;
const promptUser = require("../src/prompt-user");
const loadJsonFile = require("../src/load-json-file");
const combineData = require("../src/combine-data");

if (argv.v || argv.version) {
  console.log("spendesk-collector-template version:", collectorTemplateVersion);
  process.exit(0);
}

const targetPath = argv._[0] || "./";

const existingManifestJson = loadJsonFile(targetPath, "manifest.json");
const existingPackageJson = loadJsonFile(targetPath, "package.json");

promptUser(argv, existingManifestJson, existingPackageJson).then(
  userAnswers => {
    const data = combineData(
      argv,
      userAnswers,
      existingManifestJson,
      existingPackageJson
    );

    gulp
      .src(`${__dirname}/../template/**/*`, { dot: true })
      .pipe(template(data, { interpolate: /<%=([\s\S]+?)%>/g }))
      .pipe(conflict(targetPath))
      .pipe(gulp.dest(targetPath));
  }
);
