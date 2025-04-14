export default function TicksToMilliseconds(ticks: number): number {
  return (ticks / 20) * 1000;
}
