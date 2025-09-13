import type { UserInput } from '../../Types/Global.js';

class PlayerSocialMedia {
  discord: UserInput | null;
  youtube: UserInput | null;
  twitch: UserInput | null;
  hypixel: UserInput | null;
  twitter: UserInput | null;
  instagram: UserInput | null;
  tiktok: UserInput | null;
  constructor(data: Record<string, any>) {
    this.discord = data?.DISCORD || null;
    this.youtube = data?.YOUTUBE || null;
    this.twitch = data?.TWITCH || null;
    this.hypixel = data?.HYPIXEL || null;
    this.twitter = data?.TWITTER || null;
    this.instagram = data?.INSTAGRAM || null;
    this.tiktok = data?.TIKTOK || null;
  }
}

export default PlayerSocialMedia;
