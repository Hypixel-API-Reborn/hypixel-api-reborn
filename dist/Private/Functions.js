import Client from '../Client.js';
class Functions {
    client;
    constructor(client) {
        this.client = client;
    }
    isUUID(uuid) {
        const regexp = /^[0-9a-f]{32}$/i;
        uuid = uuid.replace(/-/g, '');
        return regexp.test(uuid);
    }
    isGuildID(id) {
        return id.length === 24;
    }
}
export default Functions;
//# sourceMappingURL=Functions.js.map