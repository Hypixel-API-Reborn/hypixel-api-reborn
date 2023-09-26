// See https://github.com/HypixelDev/PublicAPI/blob/db26b5fd3b7bb29da14e40e6d211143ec44a4519/Documentation/misc/Oscillation.md
// Month oscillation started in December 2014, so every month that is pair ( odd in js!! ) is month A
// Weekly oscillation started... just refer to the code in the docs
// eslint-disable-next-line require-jsdoc
function monthAB(date = Date.now()) {
  return new Date(date).getMonth() % 2 ? 'a' : 'b';
}

const weeklyOscillationStart = 1417237200000;
// eslint-disable-next-line require-jsdoc
function weekAB(date = Date.now()) {
  return (Math.abs(new Date(date).getTime() - weeklyOscillationStart) / 604800000) % 2 ? 'a' : 'b';
}

module.exports = { monthAB, weekAB };
