const _ = require("lodash");

class SigninError extends Error {}

module.exports = async (browser, ship, client) => {
  try {
    client.logger.info("signin.start");

    /*
     * 1. Throw signin error when required settings are empty
     * 2. Try to signin to the supplier
     */


    client.logger.info("signin.success");
  } catch (e) {
    client.logger.error("signin.error", { error: e.message });

    throw new Error(
      e.constructor.name === "SigninError" ? e.message : "Login failed"
    );
  }
};
