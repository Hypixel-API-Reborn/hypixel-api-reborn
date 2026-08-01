import type { RequestOptions } from '../Types/Requests.js';

class RawRequestData<T = any> {
  readonly rawData: T;
  readonly headers: Headers;
  readonly statusCode: number;
  readonly options: RequestOptions;
  readonly requestTimestamp: number;
  readonly requestAt: Date;
  readonly requestUrl: string;
  readonly cached: boolean;
  constructor(
    data: T,
    headers: Headers,
    info: { status: number; url: string; options: RequestOptions; cached: boolean; timestamp?: number }
  ) {
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
