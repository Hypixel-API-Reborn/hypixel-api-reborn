import { SocialMediaId } from '../../Types/Player.js';

class SocialMedia {
  id: SocialMediaId;
  link: string;
  constructor(data: { id: SocialMediaId; link: string }) {
    this.id = data.id;
    this.link = data.link;
  }
}

export function parseSocialMedia(data: Record<SocialMediaId, string>): SocialMedia[] {
  return Object.keys(data).map(
    (media) => new SocialMedia({ id: media as SocialMediaId, link: data[media as SocialMediaId] })
  );
}

export default SocialMedia;
