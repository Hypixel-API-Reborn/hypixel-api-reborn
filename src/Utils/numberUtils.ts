export function Divide(a: number, b: number): number {
  const out = Number(((a || 0) / (b || 0)).toFixed(2)) || 0;
  if (isFinite(out)) return out;
  return a;
}

export function TicksToMilliseconds(ticks: number): number {
  return (ticks / 20) * 1000;
}

export function CalculateAverage(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}
