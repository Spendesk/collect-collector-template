const Promise = require("bluebird");

const getemailInvoicesUrlsEvaluator = lastCollectedAt => {
  const lastCollectedDate = new Date(lastCollectedAt);
  const invoiceUrls = [];

  document
    .querySelectorAll(".ibox-content>table>tbody>tr")
    .forEach(billingTag => {
      const rowTds = billingTag.querySelectorAll("td");
      const data = {};
      data.date = rowTds[1].textContent.replace("th", ",");
      data.href = rowTds[3].querySelector("a").href;
      const invoiceDate = new Date(data.date);
      if (invoiceDate.getTime() >= lastCollectedDate.getTime()) {
        invoiceUrls.push(data);
      }
    });

  return invoiceUrls;
};

const getemailInvoicesPrintEvaluator = () => {
  const body = document.querySelector("body");
  body.classList.value = "";
  body.innerHTML = document.querySelector("#printable").innerHTML;
};

module.exports = async (browser, ship, client) => {
  try {
    client.logger.info("getInvoices.start");

    /*
     * Fetch invoices
     */

    client.logger.info("getInvoices.success");

    // return invoices;
  } catch (e) {
    client.logger.info("getInvoices.error", { error: e.message });

    throw new Error("Invoices fetching failed");
  }
};
