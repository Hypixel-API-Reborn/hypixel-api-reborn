module.exports = (uuid) => {
  const regexp = /[0-9a-fA-F]{8}(-)?[0-9a-fA-F]{4}(-)?[0-9a-fA-F]{4}(-)?[0-9a-fA-F]{4}(-)?[0-9a-fA-F]{12}/gm;
  return regexp.test(uuid);
};
