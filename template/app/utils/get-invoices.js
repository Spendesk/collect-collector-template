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
