/* eslint-disable no-console */
import Client from './src/Client';
import RequestData from './src/Private/RequestData';
import SkyblockProfile from './src/Structures/SkyBlock/Profile/SkyblockProfile';
import { SkyblockProfileName } from './src/Types/Skyblock';
import { existsSync, mkdirSync, writeFileSync } from 'fs';

const HYPIXEL_KEY = '801b4ebe-24d8-4945-96f5-dd201b886d33';
const client = new Client(HYPIXEL_KEY, { cache: false, checkForUpdates: false, rateLimit: 'NONE' });

if (!existsSync(`./testData/`)) mkdirSync(`./testData/`, { recursive: true });

async function getData(uuid: string) {
  try {
    const res = (await client.getSkyblockProfiles(uuid, { raw: true })) as RequestData;

    if (!existsSync(`./testData/${uuid}`)) mkdirSync(`./testData/${uuid}`, { recursive: true });
    if (!existsSync(`./testData/${uuid}/raw`)) mkdirSync(`./testData/${uuid}/raw`, { recursive: true });
    if (!existsSync(`./testData/${uuid}/parsed`)) mkdirSync(`./testData/${uuid}/parsed`, { recursive: true });

    const parsedData: Map<SkyblockProfileName | 'UNKNOWN', SkyblockProfile> = new Map();
    for (const profile of res.data.profiles) {
      const parsedProfile = new SkyblockProfile(profile, { uuid, garden: null });
      parsedData.set(parsedProfile.profileName, parsedProfile);
    }

    const profiles = parsedData.keys() as unknown as string[];
    profiles.forEach((profileName: string) => {
      if (!existsSync(`./testData/${uuid}/parsed/${profileName}`)) {
        mkdirSync(`./testData/${uuid}/parsed/${profileName}`, { recursive: true });
      }
      const profile = parsedData.get(profileName as SkyblockProfileName) as SkyblockProfile;
      Object.keys(profile).forEach((key) =>
        writeFileSync(`./testData/${uuid}/parsed/${profileName}/${key}.json`, JSON.stringify(profile[key]))
      );
    });

    res.data.profiles.forEach((profile) => {
      if (!existsSync(`./testData/${uuid}/raw/${profile.cute_name}`)) {
        mkdirSync(`./testData/${uuid}/raw/${profile.cute_name}`, { recursive: true });
      }
      Object.keys(profile).forEach((key) =>
        writeFileSync(`./testData/${uuid}/raw/${profile.cute_name}/${key}.json`, JSON.stringify(profile[key]))
      );
    });
  } catch (error) {
    console.log(error);
  }
}

// const uuids = [
//   '89d07498cd094a04883e714e849adc3c',
//   'add71246c46e455c8345c129ea6f146c',
//   '50bf08b39c7c4fdb8f8517afd407113a'
// ];
// for (const uuid of uuids) {
//   if (!existsSync(`./testData`)) mkdirSync(`./testData`, { recursive: true });
//   await getData(uuid);
// }

(async () => {
  const res = await client.getSkyblockNews();
  console.log(res);
  Object.keys(res).forEach((key) => writeFileSync(`./testData/${key}.json`, JSON.stringify(res[key])));

  // writeFileSync(
  //   './data.txt',
  //   Object.keys(res.data.products)
  //     .map((d) => `| '${d}'`)
  //     .join('\n')
  // );
})();

// process.exit();

/*

src/Structures/SkyBlock/Member/**

*/
