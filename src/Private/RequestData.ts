import RawRequestData from './RawRequestData.ts';

class RequestData<Parsed, Raw = any> {
  constructor(
    readonly parsed: Parsed,
    readonly raw: RawRequestData<Raw>
  ) {}
}

export default RequestData;
