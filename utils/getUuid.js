const fetch = require('node-fetch');

module.exports = async (name) => {
    let info = await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`, {method: 'GET'});
        let uuid;

        if(info.status == 204) {
            uuid = 'Player does not exist';
        } else {
            info = await info.json();
            uuid = info.id;
        }

        return uuid;
}
