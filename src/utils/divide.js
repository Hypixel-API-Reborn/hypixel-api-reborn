module.exports = (a=0, b=1) => {
  const out = +((a || 0) / (b || 0)).toFixed(2) || 0;
  if (isFinite(out)) return out;
  return a;
};
