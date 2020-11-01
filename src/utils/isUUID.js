module.exports = (uuid) => {
  const regexp = /[0-9a-f]{8}[0-9a-f]{4}[0-9a-f]{4}[0-9a-f]{4}[0-9a-f]{12}/gim;
  uuid = uuid.replace(/-/g, '');
  return regexp.test(uuid);
};
