const SpendeskCollect = require("spendesk-collect");

const { PORT = 8082 } = process.env;

const collector = new SpendeskCollect.Collector(PORT);
collector.startApp();
