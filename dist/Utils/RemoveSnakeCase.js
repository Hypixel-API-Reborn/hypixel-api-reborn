export function validateJSON(obj) {
    return typeof obj === 'object' && JSON.stringify(obj)[0] === '{';
}
export function recursive(obj, lowerCase = false) {
    if (!validateJSON(obj))
        return obj;
    return Object.keys(obj).reduce((pV, cV) => ({
        ...pV,
        [(lowerCase ? cV : cV.toLowerCase()).replace(/_[a-z]/gi, (x) => (x?.[1] || 'UNKNOWN').toUpperCase())]: recursive(obj[cV])
    }), {});
}
export function RemoveSnakeCaseString(str) {
    return str.toLowerCase().replace(/_[a-z]/gi, (x) => (x?.[1] || 'UNKNOWN').toUpperCase());
}
//# sourceMappingURL=RemoveSnakeCase.js.map