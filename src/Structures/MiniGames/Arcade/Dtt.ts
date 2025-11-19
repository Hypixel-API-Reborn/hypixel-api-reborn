// TODO: Work out WHAT THE FUCK Dtt means. I cannot find any mentions of it
class Dtt {
  dropdown: boolean;
  filter: boolean;
  music: boolean;
  constructor(data: Record<string, any>) {
    this.dropdown = data?.dtt_dropdown || false;
    this.filter = data?.dtt_filter || false;
    this.music = data?.dtt_music || false;
  }
}

export default Dtt;
