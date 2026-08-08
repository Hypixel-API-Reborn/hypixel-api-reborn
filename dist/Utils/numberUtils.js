export function Divide(a, b) {
    const out = Number(((a || 0) / (b || 0)).toFixed(2)) || 0;
    if (isFinite(out))
        return out;
    return a;
}
export function TicksToMilliseconds(ticks) {
    return (ticks / 20) * 1000;
}
//# sourceMappingURL=numberUtils.js.map