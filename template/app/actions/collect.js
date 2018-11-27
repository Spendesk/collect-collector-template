module.exports = (req, res) => {
  const spendeskCollectClient = req.client;
  const spendeskCollectShip = req.ship;

  res.json({ ok: true });
};
