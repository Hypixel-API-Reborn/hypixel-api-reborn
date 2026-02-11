import EmblemColors from './EmblemColors.js';
class Emblem {
    colorUnlocked;
    selectedColor;
    selectedIcon;
    constructor(data) {
        this.colorUnlocked = new EmblemColors(data?.color_unlocked || {});
        this.selectedColor = data?.selected_color || 'UNKNOWN';
        this.selectedIcon = data?.selected_icon || 'UNKNOWN';
    }
}
export default Emblem;
//# sourceMappingURL=Emblem.js.map