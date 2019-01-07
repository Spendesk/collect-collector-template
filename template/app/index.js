const SpendeskCollect = require("spendesk-collect");

const { PORT = 8082, NODE_ENV } = process.env;

const collector = new SpendeskCollect.Collector(PORT, NODE_ENV === "development");
collector.startApp();
