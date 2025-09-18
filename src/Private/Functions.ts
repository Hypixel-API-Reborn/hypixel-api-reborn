import Client from '../Client.js';

class Functions {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  isUUID(uuid: string): boolean {
    const regexp = /^[0-9a-f]{32}$/i;
    uuid = uuid.replace(/-/g, '');
    return regexp.test(uuid);
  }

  isGuildID(id: string): boolean {
    return id.length === 24;
  }
}

export default Functions;
