/**
 * 
 * @param {object} object
 * @returns {Array} 
 */
module.exports = (object) => {
	const array = [];

	const object_length = Object.keys(object).length;
	for (let i = 0; i < object_length; i++) {
		array.push(Object.keys(object)[i]);
	}
	return array;
};