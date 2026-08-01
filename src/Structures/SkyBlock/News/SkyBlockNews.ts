class SkyBlockNews {
  title: string;
  link: string;
  date: Date | null;
  version: string | null;
  constructor(data: Record<string, any>) {
    this.title = data?.title ?? 'UNKNOWN';
    this.link = data?.link ?? 'UNKNOWN';
    this.date = SkyBlockNews.parseDate(data?.text ?? 'UNKNOWN');
    this.version = SkyBlockNews.parseVer(this.title);
  }

  toString(): string {
    return this.title;
  }

  static parseDate(stringDate: string): Date | null {
    const dateRegExp = /(\d{1,2})(?:st|nd|rd|th|) ([A-Za-z]+) (\d+)/;
    const matched = stringDate.match(dateRegExp);
    if (!matched) return null;
    return new Date(matched.slice(1).join(' '));
  }

  static parseVer(stringVer: string): string | null {
    const versionRegExp = /v\d+(\.\d+){1,}/;
    const matches = versionRegExp.exec(stringVer);
    if (!matches?.length) return null;
    return matches[0];
  }
}

export default SkyBlockNews;
