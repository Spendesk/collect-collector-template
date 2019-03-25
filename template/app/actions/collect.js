const browserUtil = require("../utils/browser");
const signinUtil = require("../utils/signin");
const getInvoicesUtil = require("../utils/get-invoices");
const sendInvoicesUtil = require("../utils/send-invoices");

module.exports = async (ship, client, captchaSolver) => {
  const browser = await browserUtil();

  await signinUtil(browser, ship, client);

  const invoices = await getInvoicesUtil(browser, ship, client);
  await sendInvoicesUtil(invoices, client);

  await browser.close();
};
