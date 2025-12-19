import SkyWarsMode from '../../SkyWarsMode/SkyWarsMode.ts';

class SkyWarsTeamsKitsAttacking {
  scout: SkyWarsMode;
  knight: SkyWarsMode;
  snowman: SkyWarsMode;
  hunter: SkyWarsMode;
  enderman: SkyWarsMode;
  energix: SkyWarsMode;
  slime: SkyWarsMode;
  salmon: SkyWarsMode;
  sloth: SkyWarsMode;
  pigRider: SkyWarsMode;
  grenade: SkyWarsMode;
  engineer: SkyWarsMode;
  magician: SkyWarsMode;
  default: SkyWarsMode;
  jester: SkyWarsMode;
  fisherman: SkyWarsMode;
  archeologist: SkyWarsMode;
  defaultTeams: SkyWarsMode;
  fallenAngel: SkyWarsMode;
  constructor(data: Record<string, any>) {
    this.scout = new SkyWarsMode(data, 'kit_attacking_team_scout');
    this.knight = new SkyWarsMode(data, 'kit_attacking_team_knight');
    this.snowman = new SkyWarsMode(data, 'kit_attacking_team_snowman');
    this.hunter = new SkyWarsMode(data, 'kit_attacking_team_hunter');
    this.enderman = new SkyWarsMode(data, 'kit_attacking_team_enderman');
    this.energix = new SkyWarsMode(data, 'kit_attacking_team_energix');
    this.slime = new SkyWarsMode(data, 'kit_attacking_team_slime');
    this.salmon = new SkyWarsMode(data, 'kit_attacking_team_salmon');
    this.sloth = new SkyWarsMode(data, 'kit_attacking_team_sloth');
    this.pigRider = new SkyWarsMode(data, 'kit_attacking_team_pig-rider');
    this.grenade = new SkyWarsMode(data, 'kit_attacking_team_grenade');
    this.engineer = new SkyWarsMode(data, 'kit_attacking_team_engineer');
    this.magician = new SkyWarsMode(data, 'kit_attacking_team_magician');
    this.default = new SkyWarsMode(data, 'kit_attacking_team_default');
    this.jester = new SkyWarsMode(data, 'kit_attacking_team_jester');
    this.fisherman = new SkyWarsMode(data, 'kit_attacking_team_fisherman');
    this.archeologist = new SkyWarsMode(data, 'kit_attacking_team_archeologist');
    this.defaultTeams = new SkyWarsMode(data, 'kit_attacking_teams_default');
    this.fallenAngel = new SkyWarsMode(data, 'kit_attacking_team_fallen-angel');
  }
}

export default SkyWarsTeamsKitsAttacking;
