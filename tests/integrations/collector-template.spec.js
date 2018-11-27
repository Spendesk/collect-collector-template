const path = require("path");
const { execSync } = require("child_process");

describe("CollectorTemplate", () => {
  test("execute command line", () => {
    console.log(">>> cleaning up...");
    execSync("rm -rf test-collector");

    console.log(">>> generating test-collector...");
    execSync("node ./bin/collector-template test-collector --non-interactive --name='Test'");
    process.chdir("./test-collector");

    console.log(">>> installing dependencies...");
    execSync("yarn");


    console.log(">>> asserting generated code...");
    const generatedPackageJson = require(path.join(process.cwd(), "package.json"));
    const generatedManifestJson = require(path.join(process.cwd(), "manifest.json"));

    expect(generatedPackageJson.name).toEqual("spendesk-test-collector");
    expect(generatedManifestJson.name).toEqual("Test");
  })
})

