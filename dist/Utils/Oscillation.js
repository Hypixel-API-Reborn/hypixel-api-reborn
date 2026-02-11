// See https://github.com/HypixelDev/PublicAPI/blob/db26b5fd3b7bb29da14e40e6d211143ec44a4519/Documentation/misc/Oscillation.md
// Month Oscillation started in December 2014, so every month that is pair ( odd in js!! ) is month A
// Weekly Oscillation started... just refer to the code in the docs
const weeklyOscillationStart = 1417237200000;
export function monthAB(month) {
    if (month === undefined) {
        month = new Date().getMonth();
    }
    return month % 2 ? 'a' : 'b';
}
export function weekAB() {
    return (Math.abs(new Date().getTime() - weeklyOscillationStart) / 604800000) % 2 ? 'a' : 'b';
}
//# sourceMappingURL=Oscillation.js.map