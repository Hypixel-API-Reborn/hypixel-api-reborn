module.exports = async function () {
  const res = await this._makeRequest('/playerCount');

  return res.playerCount;
};
