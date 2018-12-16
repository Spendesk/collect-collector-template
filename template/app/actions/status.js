const browserUtil = require("../utils/browser");
const signinUtil = require("../utils/signin");

module.exports = async (req, res) => {
  res.json({ ok: true });

  const client = req.client;
  const ship = req.ship;
  const browser = await browserUtil();

  try {
    await signinUtil(browser, ship, client);

    client.status("ok");
  } catch (e) {
    client.status("error", e.message);
  }

  await browser.close();
};
