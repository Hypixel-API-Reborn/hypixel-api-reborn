export function isUUID(uuid: string): boolean {
  const regexp = /^[0-9a-f]{32}$/i;
  return regexp.test(uuid.replace(/-/g, ''));
}

export function isGuildId(id: string): boolean {
  return id.length === 24;
}

export function isValidJSON(obj: any) {
  return typeof obj === 'object' && JSON.stringify(obj)[0] === '{';
}
