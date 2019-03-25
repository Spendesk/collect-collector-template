const browserUtil = require("../utils/browser");
const signinUtil = require("../utils/signin");

module.exports = async (ship, client, captchaSolver) => {
  const browser = await browserUtil();

  await signinUtil(browser, ship, client);

  await browser.close();
};
