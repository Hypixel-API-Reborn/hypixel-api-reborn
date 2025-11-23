export default function ParseBedWarsMode(mode?: string): string {
  return mode && mode.trim() !== '' ? `${mode.replace(/_$/, '')}_` : '';
}
