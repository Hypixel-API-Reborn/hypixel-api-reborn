export function ParseModeBefore(mode?: string): string {
  return mode?.trim() ? `${mode.trim().replace(/_+$/, '')}_` : '';
}

export function ParseModeAfter(mode?: string): string {
  return mode?.trim() ? `_${mode.trim().replace(/^_+/, '')}` : '';
}

export function ParseModeBeforeAfter(mode?: string): string {
  return mode?.trim() ? `_${mode.trim().replace(/^_+|_+$/g, '')}_` : '';
}
