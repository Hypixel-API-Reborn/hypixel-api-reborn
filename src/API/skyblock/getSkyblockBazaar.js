module.exports = async function () {
  const Product = require('../../structures/SkyBlock/Bazzar/Product');

  const res = await this._makeRequest('/skyblock/bazaar');

  const productsKeys = Object.keys(res.products);

  return productsKeys.map(x => new Product(res.products[x]));
};
