export function ParseModeBefore(mode?: string): string {
  return mode && mode.trim() !== '' ? `${mode.replace(/_$/, '')}_` : '';
}

export function ParseModeAfter(mode?: string): string {
  return mode && mode.trim() !== '' ? `_${mode.replace(/^_|_$/g, '')}` : '';
}

export function ParseModeBeforeAfter(mode?: string): string {
  return mode && mode.trim() !== '' ? `_${mode.replace(/_$/, '')}_` : '';
}
