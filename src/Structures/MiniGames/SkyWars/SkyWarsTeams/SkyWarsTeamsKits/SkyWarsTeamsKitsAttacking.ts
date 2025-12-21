import BaseSkyWarsMode from '../../SkyWarsMode/BaseSkyWarsMode.ts';

class SkyWarsTeamsKitsAttacking {
  scout: BaseSkyWarsMode;
  knight: BaseSkyWarsMode;
  snowman: BaseSkyWarsMode;
  hunter: BaseSkyWarsMode;
  enderman: BaseSkyWarsMode;
  energix: BaseSkyWarsMode;
  slime: BaseSkyWarsMode;
  salmon: BaseSkyWarsMode;
  sloth: BaseSkyWarsMode;
  pigRider: BaseSkyWarsMode;
  grenade: BaseSkyWarsMode;
  engineer: BaseSkyWarsMode;
  magician: BaseSkyWarsMode;
  default: BaseSkyWarsMode;
  jester: BaseSkyWarsMode;
  fisherman: BaseSkyWarsMode;
  archeologist: BaseSkyWarsMode;
  defaultTeams: BaseSkyWarsMode;
  fallenAngel: BaseSkyWarsMode;
  constructor(data: Record<string, any>) {
    this.scout = new BaseSkyWarsMode(data, 'kit_attacking_team_scout');
    this.knight = new BaseSkyWarsMode(data, 'kit_attacking_team_knight');
    this.snowman = new BaseSkyWarsMode(data, 'kit_attacking_team_snowman');
    this.hunter = new BaseSkyWarsMode(data, 'kit_attacking_team_hunter');
    this.enderman = new BaseSkyWarsMode(data, 'kit_attacking_team_enderman');
    this.energix = new BaseSkyWarsMode(data, 'kit_attacking_team_energix');
    this.slime = new BaseSkyWarsMode(data, 'kit_attacking_team_slime');
    this.salmon = new BaseSkyWarsMode(data, 'kit_attacking_team_salmon');
    this.sloth = new BaseSkyWarsMode(data, 'kit_attacking_team_sloth');
    this.pigRider = new BaseSkyWarsMode(data, 'kit_attacking_team_pig-rider');
    this.grenade = new BaseSkyWarsMode(data, 'kit_attacking_team_grenade');
    this.engineer = new BaseSkyWarsMode(data, 'kit_attacking_team_engineer');
    this.magician = new BaseSkyWarsMode(data, 'kit_attacking_team_magician');
    this.default = new BaseSkyWarsMode(data, 'kit_attacking_team_default');
    this.jester = new BaseSkyWarsMode(data, 'kit_attacking_team_jester');
    this.fisherman = new BaseSkyWarsMode(data, 'kit_attacking_team_fisherman');
    this.archeologist = new BaseSkyWarsMode(data, 'kit_attacking_team_archeologist');
    this.defaultTeams = new BaseSkyWarsMode(data, 'kit_attacking_teams_default');
    this.fallenAngel = new BaseSkyWarsMode(data, 'kit_attacking_team_fallen-angel');
  }
}

export default SkyWarsTeamsKitsAttacking;
