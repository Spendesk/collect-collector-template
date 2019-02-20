const browserUtil = require("../utils/browser");
const signinUtil = require("../utils/signin");

module.exports = async (ship, client, captchaSolver) => {
  const browser = await browserUtil();

  try {
    await signinUtil(browser, ship, client);

    client.status("ok");
  } catch (e) {
    client.status("error", e.message);
  }

  await browser.close();
};
