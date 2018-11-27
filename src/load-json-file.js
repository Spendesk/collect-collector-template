const path = require("path");
const fs = require("fs");

module.exports = (targetPath, fileName) => {
  try {
    const existingJsonFilePath = path.join(process.cwd(), targetPath, fileName);
    if (fs.existsSync(existingJsonFilePath)) {
      console.log("Loading: ", existingJsonFilePath);
      return require(existingJsonFilePath); // eslint-disable-line 
    }
    return {};
  } catch (e) {
    console.log(`Failed to load ${fileName}, exiting`);
    return process.exit(1);
  }
};
