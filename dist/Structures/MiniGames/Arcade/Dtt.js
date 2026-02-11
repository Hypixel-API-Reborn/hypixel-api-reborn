// TODO: Work out WHAT THE FUCK Dtt means. I cannot find any mentions of it
class Dtt {
    dropdown;
    filter;
    music;
    constructor(data) {
        this.dropdown = data?.dtt_dropdown || false;
        this.filter = data?.dtt_filter || false;
        this.music = data?.dtt_music || false;
    }
}
export default Dtt;
//# sourceMappingURL=Dtt.js.map