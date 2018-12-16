const Promise = require("bluebird");

module.exports = async (invoices, client) => {
  try {
    client.logger.info("sendInvoices.start");

    await Promise.map(
      invoices,
      async invoice => {
        client.logger.info("sendInvoices.invoice.start");

        /*
         * Send invoices
         */

        client.logger.info("sendInvoices.invoice.success");
      },
      {
        concurrency: 1
      }
    );

    client.logger.info("sendInvoices.success");
  } catch (e) {
    client.logger.info("sendInvoices.error", { error: e.message });

    throw new Error("Invoices uploading failed");
  }
};
