const fetch = require('node-fetch');

/**
 * @async 
 * 
 * @param {string} name
 * 
 * @returns {string}
 */

module.exports = async (name) => {
	let uuid;
	let info = await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`).then(r => r.json()).catch(() => {
        
		return uuid = 'Player does not exist';
	});
    
	if (info.status && info.status == 204) {
		uuid = 'Player does not exist';
	} else {
		uuid = info.id;
	}

	return uuid;
};
