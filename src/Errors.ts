/* eslint-disable max-len */
class Errors {
  INVALID_API_KEY: string =
    '[Hypixel-API-Reborn] Invalid API Key! For help join our Discord Server https://discord.gg/NSEBNMM';
  NO_API_KEY: string =
    '[Hypixel-API-Reborn] No API Key specified! For help join our Discord Server https://discord.gg/NSEBNMM';
  ERROR_CODE_CAUSE: string =
    '[Hypixel-API-Reborn] Code: {code} - {cause}! For help join our Discord Server https://discord.gg/NSEBNMM';
  ERROR_STATUSTEXT: string =
    '[Hypixel-API-Reborn] {statustext}! For help join our Discord Server https://discord.gg/NSEBNMM';
  NO_NICKNAME_UUID: string = '[Hypixel-API-Reborn] No nickname or uuid specified.';
  NO_UUID: string = '[Hypixel-API-Reborn] No uuid specified.';
  UUID_NICKNAME_MUST_BE_A_STRING: string = '[Hypixel-API-Reborn] Nickname or uuid must be a string.';
  MALFORMED_UUID: string = '[Hypixel-API-Reborn] Malformed UUID!';
  PLAYER_HAS_NEVER_LOGGED: string = '[Hypixel-API-Reborn] Player has never logged into Hypixel.';
  NO_GUILD_QUERY: string = '[Hypixel-API-Reborn] No guild search query specified.';
  INVALID_GUILD_ID: string = '[Hypixel-API-Reborn] Specified Guild ID is invalid.';
  INVALID_GUILD_SEARCH_PARAMETER: string =
    "[Hypixel-API-Reborn] getGuild() searchParameter must be 'id'; 'guild' or 'player'.";
  SOMETHING_WENT_WRONG: string = '[Hypixel-API-Reborn] Something went wrong. {cause}';
  GUILD_DOES_NOT_EXIST: string = '[Hypixel-API-Reborn] Guild does not exist.';
  PAGE_INDEX_ERROR: string =
    '[Hypixel-API-Reborn] Invalid page index. Must be an integer, an array of 2 integers, or a keyword. For help join our Discord Server https://discord.gg/NSEBNMM';
  INVALID_OPTION_VALUE: string =
    '[Hypixel-API-Reborn] Invalid option value! For help join our Discord Server https://discord.gg/NSEBNMM';
  UPDATER_REQUEST_NOT_OK: string = '[Hypixel-API-Reborn] Something went wrong while checking for updates.';
  MULTIPLE_INSTANCES: string =
    '[Hypixel-API-Reborn] Multiple instances of hypixel-api-reborn are found so we merged them for you. Please refrain from spawning multiple instances in the future. For more information, join our Discord Server https://discord.gg/NSEBNMM.';
  UNEXPECTED_ERROR: string =
    "[Hypixel-API-Reborn] The data provided to hypixel API is malformed and thus not recognized by hypixel, but this shouldn't be your fault. Please report this error in our Discord Server https://discord.gg/NSEBNMM or GitHub. ";
  RATE_LIMIT_EXCEEDED: string =
    "[Hypixel-API-Reborn] The rate limitations on your API Key has been exceeded. There might be an outage (Check Hypixel's status page), or you simply did too many requests in a short time. Hint: Enable rate limit options! They can help you avoid this error! For help join our Discord Server https://discord.gg/NSEBNMM";
  RECENT_REQUEST: string =
    '[Hypixel-API-Reborn] You have requested that player recently. Try turning on cache. For help join our Discord Server https://discord.gg/NSEBNMM';
  NO_SKYBLOCK_PROFILES: string = '[Hypixel-API-Reborn] The player has no SkyBlock profiles.';
  BAD_AUCTION_FILTER: string =
    '[Hypixel-API-Reborn] Unexpected filter for Client#getSkyBlockAuction. Expected one of "PROFILE", "PLAYER", "AUCTION_ID", but got something else.';
  NOT_IMPLEMENTED: string =
    '[Hypixel-API-Reborn] Endpoint execute method is not implemented yet! Please report this https://discord.gg/NSEBNMM';
  RATE_LIMIT_INIT_ERROR: string =
    '[hypixel-api-reborn] An error happened whilst initializing rate limit. We strongly recommend restarting the code as this can lead to desynchronization.';
  ENDPOINT_NOT_LOADED: string = '[hypixel-api-reborn] This endpoint has not been loaded yet. Please restart your code';
}

export default Errors;
