const regex = /https:\/\/status.hypixel.net\/incidents\/([a-z0-9]+)/;
/**
 * API incident class
 * @param {object} data API incident data
 */
class APIIncident {
  constructor (data) {
    /**
     * Link to incident
     * @type {string|null}
     */
    this.link = data.link || null;
    /**
     * Timestamp when investigation was started as Date object
     * @type {object|null}
     */
    this.start = new Date(data.pubDate) || null;
    /**
     * Formatted timestamp when investigation was started
     * @type {string|null}
     */
    this.startFormatted = data.pubDate || null;
    /**
     * Timestamp when investigation was started as Date
     * @type {Date|null}
     */
    this.startTimestamp = new Date(data.pubDate).getTime() || null;
    /**
     * Incident author
     * @type {string|null}
     */
    this.author = data.creator || null;
    /**
     * Content as HTML
     * @type {string|null}
     */
    this.HTMLContent = data.content || null;
    /**
     * Content snippet
     * @type {string|null}
     */
    this.snippet = data.contentSnippet || null;
    /**
     * Content as plain text
     * @type {string|null}
     */
    this.TextContent = (data.content || '').replace(/<[^>]+>/g, '') || null;
    /**
     * GUID
     * @type {string|null}
     */
    this.guid = data.guid ? regex.exec(data.guid)[1] : null;
    /**
     * Incident categories
     * @type {string[]}
     */
    this.categories = data.categories || [];
  }
}

module.exports = APIIncident;
