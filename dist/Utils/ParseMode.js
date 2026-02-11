export function ParseModeBefore(mode) {
    return mode?.trim() ? `${mode.trim().replace(/_+$/, '')}_` : '';
}
export function ParseModeAfter(mode) {
    return mode?.trim() ? `_${mode.trim().replace(/^_+/, '')}` : '';
}
export function ParseModeBeforeAfter(mode) {
    return mode?.trim() ? `_${mode.trim().replace(/^_+|_+$/g, '')}_` : '';
}
//# sourceMappingURL=ParseMode.js.map