export default function Divide(a: number, b: number): number {
  const out = Number(((a || 0) / (b || 0)).toFixed(2)) || 0;
  if (isFinite(out)) return out;
  return a;
}
