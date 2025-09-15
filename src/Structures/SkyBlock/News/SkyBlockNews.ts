import type RequestData from '../../../Private/RequestData.ts';

const dateRegExp = /(\d{1,2})(?:st|nd|rd|th|) ([A-Za-z]+) (\d+)/;
const versionRegExp = /v\d+(\.\d+){1,}/;

function parseDate(stringDate: string): Date | null {
  const matched = stringDate.match(dateRegExp);
  if (!matched) return null;
  return new Date(matched.slice(1).join(' '));
}

function parseVer(stringVer: string): string | null {
  const matches = versionRegExp.exec(stringVer);
  if (!matches?.length) return null;
  return matches[0];
}

class SkyBlockNews {
  title: string;
  link: string;
  date: Date | null;
  version: string | null;
  constructor(data: Record<string, any>) {
    this.title = data?.title || 'UNKNOWN';
    this.link = data?.link || 'UNKNOWN';
    this.date = parseDate(data?.text || 'UNKNOWN');
    this.version = parseVer(this.title);
  }

  toString(): string {
    return this.title;
  }

  isRaw(): this is RequestData {
    return false;
  }
}

export default SkyBlockNews;
