const APIIncident = require('./APIIncident');
class APIStatus {
  constructor (data) {
    this.sourceUrl = data.feedUrl || null;
    this.title = data.title || null;
    this.description = data.description || null;
    this.incidents = data.items.map(x => new APIIncident(x));
  }
}

module.exports = APIStatus;
