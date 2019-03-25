const AuthError = require("spendesk-collect/errors/auth");

module.exports = async (browser, ship, client) => {
  client.logger.info("signin.start");

  /*
    * 1. Throw signin error when required settings are empty
    * 2. Try to signin to the supplier
    */

  client.logger.info("signin.success");
};
