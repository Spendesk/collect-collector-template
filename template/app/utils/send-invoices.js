const CollectError = require("spendesk-collect/errors/collect");

module.exports = async (invoices, client) => {
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
};
