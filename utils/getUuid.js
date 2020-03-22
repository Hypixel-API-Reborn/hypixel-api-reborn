const fetch = require('node-fetch');

module.exports = async (name) => {
    let info = await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`).then(r => r.json());
    let uuid;
    if (info.status && info.status == 204) {
        uuid = 'Player does not exist';
    } else {
        uuid = info.id;
    }

    return uuid;
}
