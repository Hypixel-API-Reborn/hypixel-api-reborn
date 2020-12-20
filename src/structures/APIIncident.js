class APIIncident {
  constructor (data) {
    this.link = data.link || null;
    this.start = new Date(data.pubDate) || null;
    this.startFormatted = data.pubDate || null;
    this.startTimestamp = new Date(data.pubDate).getTime() || null;
    this.author = data.creator || null;
    this.HTMLContent = data.content || null;
    this.snippet = data.contentSnippet || null;
    this.TextContent = (data.content || '').replace(/<[^>]+>/g, '') || null;
    this.guid = data.guid || null;
    this.categories = data.categories || [];
  }
}

module.exports = APIIncident;
