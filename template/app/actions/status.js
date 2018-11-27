module.exports = (req, res) => {
  const spendeskCollectClient = req.client;
  const spendeskCollectShip = req.ship;

  return res.json({ label: "ok" });
};
