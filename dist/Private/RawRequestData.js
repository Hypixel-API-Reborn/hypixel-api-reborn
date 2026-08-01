class RawRequestData {
    rawData;
    headers;
    statusCode;
    options;
    requestTimestamp;
    requestAt;
    requestUrl;
    cached;
    constructor(data, headers, info) {
        this.rawData = data;
        this.headers = headers;
        this.statusCode = info.status;
        this.options = info.options;
        this.requestTimestamp = info.timestamp || Date.now();
        this.requestAt = new Date(this.requestTimestamp);
        this.requestUrl = info.url;
        this.cached = info.cached;
    }
}
export default RawRequestData;
//# sourceMappingURL=RawRequestData.js.map