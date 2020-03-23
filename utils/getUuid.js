const fetch = require('node-fetch');

module.exports = async (name) => {
    let uuid;
    let info = await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`).then(r => r.json()).catch(e => {
        return uuid = 'Player does not exist';
    });
    
    if (info.status && info.status == 204) {
        uuid = 'Player does not exist';
    } else {
        uuid = info.id;
    }

    return uuid;
}
