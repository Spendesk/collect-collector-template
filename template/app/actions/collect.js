const browserUtil = require("../utils/browser");
const signinUtil = require("../utils/signin");
const getInvoicesUtil = require("../utils/get-invoices");
const sendInvoicesUtil = require("../utils/send-invoices");

const signIn = async (browser, ship, client) => {
  try {
    await signinUtil(browser, ship, client);

    client.status("ok");

    return true;
  } catch (e) {
    client.status("error", e.message);

    return false;
  }
};

module.exports = async (ship, client, captchaSolver) => {
  const browser = await browserUtil();
  const isSignin = await signIn(browser, ship, client);

  if (isSignin) {
    try {
      const invoices = await getInvoicesUtil(browser, ship, client);

      await sendInvoicesUtil(invoices, client);

      client.done();
    } catch (e) {
      client.done(true);
    }
  } else {
    client.done(true);
  }

  await browser.close();
};
