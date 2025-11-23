class BedWarsBoxes {
  openedChests: number;
  openedCommons: number;
  openedEpics: number;
  openedLegendaries: number;
  openedRares: number;
  box: number;
  commons: number;
  epics: number;
  legendaries: number;
  rares: number;
  boxes: number;
  christmas: number;
  easter: number;
  golden: number;
  halloween: number;
  lunar: number;
  constructor(data: Record<string, any>) {
    this.openedChests = data?.Bedwars_openedChests || 0;
    this.openedCommons = data?.Bedwars_openedCommons || 0;
    this.openedEpics = data?.Bedwars_openedEpics || 0;
    this.openedLegendaries = data?.Bedwars_openedLegendaries || 0;
    this.openedRares = data?.Bedwars_openedRares || 0;
    this.box = data?.bedwars_box || 0;
    this.commons = data?.bedwars_box_commons || 0;
    this.epics = data?.bedwars_box_epics || 0;
    this.legendaries = data?.bedwars_box_legendaries || 0;
    this.rares = data?.bedwars_box_rares || 0;
    this.boxes = data?.bedwars_boxes || 0;
    this.christmas = data?.bedwars_christmas_boxes || 0;
    this.easter = data?.bedwars_easter_boxes || 0;
    this.golden = data?.bedwars_golden_boxes || 0;
    this.halloween = data?.bedwars_halloween_boxes || 0;
    this.lunar = data?.bedwars_lunar_boxes || 0;
  }
}

export default BedWarsBoxes;
