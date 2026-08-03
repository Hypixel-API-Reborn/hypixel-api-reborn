import RawRequestData from './RawRequestData.ts';
import type { MowojangProfile } from 'mowojang';

class RequestData<Parsed, Raw = any> {
  constructor(
    readonly parsed: Parsed,
    readonly raw: RawRequestData<Raw>,
    readonly mowojangProfile?: MowojangProfile
  ) {}
}

export default RequestData;
