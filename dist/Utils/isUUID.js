export default function isUUID(uuid) {
    const regexp = /^[0-9a-f]{32}$/i;
    return regexp.test(uuid.replace(/-/g, ''));
}
//# sourceMappingURL=isUUID.js.map