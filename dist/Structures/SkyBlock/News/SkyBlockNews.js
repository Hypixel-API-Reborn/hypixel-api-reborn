const dateRegExp = /(\d{1,2})(?:st|nd|rd|th|) ([A-Za-z]+) (\d+)/;
const versionRegExp = /v\d+(\.\d+){1,}/;
function parseDate(stringDate) {
    const matched = stringDate.match(dateRegExp);
    if (!matched)
        return null;
    return new Date(matched.slice(1).join(' '));
}
function parseVer(stringVer) {
    const matches = versionRegExp.exec(stringVer);
    if (!matches?.length)
        return null;
    return matches[0];
}
class SkyBlockNews {
    title;
    link;
    date;
    version;
    constructor(data) {
        this.title = data?.title || 'UNKNOWN';
        this.link = data?.link || 'UNKNOWN';
        this.date = parseDate(data?.text || 'UNKNOWN');
        this.version = parseVer(this.title);
    }
    toString() {
        return this.title;
    }
    isRaw() {
        return false;
    }
}
export default SkyBlockNews;
//# sourceMappingURL=SkyBlockNews.js.map