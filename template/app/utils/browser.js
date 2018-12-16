const puppeteer = require("puppeteer");

module.exports = () => {
  return puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
};
