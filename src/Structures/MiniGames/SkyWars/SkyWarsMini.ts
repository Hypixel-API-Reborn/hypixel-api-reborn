import SkyWarsMode from './SkyWarsMode/SkyWarsMode.js';

class SkyWarsMini extends SkyWarsMode {
  normal: SkyWarsMode;
  constructor(data: Record<string, any>) {
    super(data, 'mini');
    this.normal = new SkyWarsMode(data, 'mini_normal');
  }
}

export default SkyWarsMini;
