export default function Divide(a, b) {
    const out = Number(((a || 0) / (b || 0)).toFixed(2)) || 0;
    if (isFinite(out))
        return out;
    return a;
}
//# sourceMappingURL=Divide.js.map