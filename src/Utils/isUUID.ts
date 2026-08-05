export default function isUUID(uuid: string): boolean {
  const regexp = /^[0-9a-f]{32}$/i;
  return regexp.test(uuid.replace(/-/g, ''));
}
