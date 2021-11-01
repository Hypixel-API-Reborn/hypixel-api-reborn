/**
 * Server Info class - parses info obtained from handshaking with hypixel
 */
class ServerInfo {
  /**
   * Constructor
   * @param {Object} data data parsed from packet
   * @param {number} ping Ping
   */
  constructor (data, ping) {
    /**
     * Protocol used for retrieving info, should be 736
     * @type {Number}
     */
    this.protocolUsed = data.version.protocol || 736;
    /**
     * Version required / Server version used
     * @type {string}
     */
    this.versionInfo = data.version.name || 'Unknown';
    /**
     * Amount of players online and max players
     * @type {PlayerInfo}
     */
    this.players = {
      max: data.players.max || 0,
      online: data.players.online || 0,
      players: data.players.sample || [],
      toString: () => `${this.players.online}/${this.players.max}`
    };
    /**
     * Server MOTD, as it is received
     * @type {string}
     */
    this.rawMOTD = data.description || '';
    /**
     * Clean MOTD, no color codes
     * @type {string}
     */
    this.cleanMOTD = this.rawMOTD.replace(/§[a-z0-9]/gi, '');
    /**
     * MOTD without surrounding white spaces for centering
     * @type {string}
     */
    this.textMOTD = this.cleanMOTD.replace(/^\s+/gm, '');
    /**
     * base64 Favicon - as it is received
     * @type {string}
     */
    this.faviconB64 = data.favicon || undefined;
    /**
     * Favicon as buffer
     * @type {Buffer}
     */
    this.favicon = Buffer.from(this.faviconB64, 'base64');
    /**
     * Ping in ms
     * @type {number}
     */
    this.ping = parseInt(ping, 10);
  }
  /**
   * toString override
   * @returns {string}
   */
  toString () {
    return `${this.textMOTD} - ${this.players} Players (${this.ping} ms) - ${this.versionInfo}`;
  }
}

/**
 * @typedef {Object} PlayerInfo
 * @property {number} max Max amount of players online possible for the server
 * @property {number} online Current amount of online players
 * @property {any[]} players Some or all IGNs of online players, usually not provided by Hypixel
 */

module.exports = ServerInfo;
