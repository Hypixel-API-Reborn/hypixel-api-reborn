class RequestData {
    data;
    headers;
    statusCode;
    options;
    requestTimestamp;
    requestAt;
    requestUrl;
    cached;
    constructor(data, headers, info) {
        this.data = data;
        this.headers = headers;
        this.statusCode = info.status;
        this.options = info.options;
        this.requestTimestamp = info.timestamp || Date.now();
        this.requestAt = new Date(this.requestTimestamp);
        this.requestUrl = info.url;
        this.cached = info.cached;
    }
    isRaw() {
        return true;
    }
}
export default RequestData;
//# sourceMappingURL=RequestData.js.map