export function removeDashesFromUUID(uuid) {
    return uuid.replace(/-/g, '').toLowerCase();
}
export function addDashesFromUUID(uuid) {
    return removeDashesFromUUID(uuid).replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, '$1-$2-$3-$4-$5');
}
export function isUUID(uuid) {
    const regexp = /^[0-9a-f]{32}$/i;
    return regexp.test(removeDashesFromUUID(uuid));
}
export function isGuildId(id) {
    return id.length === 24;
}
export function isValidJSON(obj) {
    return typeof obj === 'object' && JSON.stringify(obj)[0] === '{';
}
//# sourceMappingURL=validationUtils.js.map