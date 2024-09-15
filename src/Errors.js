/* eslint-disable max-len */
module.exports = {
  INVALID_API_KEY: '[hypixel-api-reborn] Invalid API Key! For help join our Discord Server https://discord.gg/NSEBNMM',
  NO_API_KEY: '[hypixel-api-reborn] No API Key specified! For help join our Discord Server https://discord.gg/NSEBNMM',
  ERROR_CODE_CAUSE:
    '[hypixel-api-reborn] Code: {code} - {cause}! For help join our Discord Server https://discord.gg/NSEBNMM',
  ERROR_STATUSTEXT: '[hypixel-api-reborn] {statustext}! For help join our Discord Server https://discord.gg/NSEBNMM',
  KEY_MUST_BE_A_STRING:
    '[hypixel-api-reborn] Specified API Key must be a string! For help join our Discord Server https://discord.gg/NSEBNMM',
  OPTIONS_MUST_BE_AN_OBJECT:
    '[hypixel-api-reborn] Options must be an object! For help join our Discord Server https://discord.gg/NSEBNMM',
  CACHE_TIME_MUST_BE_A_NUMBER:
    '[hypixel-api-reborn] Cache Time must be a number! For help join our Discord Server https://discord.gg/NSEBNMM',
  CACHE_LIMIT_MUST_BE_A_NUMBER:
    '[hypixel-api-reborn] Cache Limit must be a number! For help join our Discord Server https://discord.gg/NSEBNMM',
  CACHE_FILTER_INVALID:
    '[hypixel-api-reborn] Cache Filter must be a function returning a boolean, an object, an array, or a string!',
  NO_NICKNAME_UUID: '[hypixel-api-reborn] No nickname or uuid specified.',
  NO_UUID: '[hypixel-api-reborn] No uuid specified.',
  UUID_NICKNAME_MUST_BE_A_STRING: '[hypixel-api-reborn] Nickname or uuid must be a string.',
  MALFORMED_UUID: '[hypixel-api-reborn] Malformed UUID!',
  PLAYER_DOES_NOT_EXIST: '[hypixel-api-reborn] Player does not exist.',
  PLAYER_HAS_NEVER_LOGGED: '[hypixel-api-reborn] Player has never logged into Hypixel.',
  PLAYER_IS_INACTIVE:
    "[hypixel-api-reborn] No records of recent games because player hasn't been online for more than 3 days or is lacking data to determine the cause of an empty response",
  PLAYER_DISABLED_ENDPOINT: '[hypixel-api-reborn] Player has disabled this endpoint.',
  NO_GUILD_QUERY: '[hypixel-api-reborn] No guild search query specified.',
  INVALID_GUILD_ID: '[hypixel-api-reborn] Specified Guild ID is invalid.',
  INVALID_GUILD_SEARCH_PARAMETER: "[hypixel-api-reborn] getGuild() searchParameter must be 'id', 'guild' or 'player'.",
  SOMETHING_WENT_WRONG: '[hypixel-api-reborn] Something went wrong. {cause}',
  GUILD_DOES_NOT_EXIST: '[hypixel-api-reborn] Guild does not exist.',
  PAGE_INDEX_ERROR:
    '[hypixel-api-reborn] Invalid page index. Must be an integer, an array of 2 integers, or a keyword. For help join our Discord Server https://discord.gg/NSEBNMM',
  INVALID_OPTION_VALUE:
    '[hypixel-api-reborn] Invalid option value! For help join our Discord Server https://discord.gg/NSEBNMM',
  INVALID_RESPONSE_BODY:
    '[hypixel-api-reborn] An error occurred while converting to JSON. Perhaps this is due to an update or maintenance. For help join our Discord Server https://discord.gg/NSEBNMM',
  INVALID_RATE_LIMIT_OPTION:
    "[hypixel-api-reborn] Rate Limit provided in Client options must be 'HARD', 'AUTO', or 'NONE'. For help join our Discord Server https://discord.gg/NSEBNMM",
  INVALID_KEY_LIMIT_OPTION:
    '[hypixel-api-reborn] Key Limit provided in Client options must be an integer representing the amount of requests possible in one minute with your key.',
  INVALID_HEADER_SYNC_OPTION: '[hypixel-api-reborn] Invalid Value for maxSyncHeaders : must be a boolean',
  INVALID_BURST_OPTION: '[hypixel-api-reborn] maxBurstRequests provided in Client options must be a number',
  NODE_VERSION_ERR:
    "[hypixel-api-reborn] You are using a version of Nodejs that doesn't support certain features we use. Please upgrade to version 14 or above.",
  UPDATER_REQUEST_NOT_OK: '[hypixel-api-reborn] An error occurred checking for updates.',
  CONNECTION_ERROR: '[hypixel-api-reborn] Failed to connect.',
  RATE_LIMIT_INIT_ERROR:
    '[hypixel-api-reborn] An error happened whilst initializing rate limit. We strongly recommend restarting the code as this can lead to desynchronization.',
  MULTIPLE_INSTANCES:
    '[hypixel-api-reborn] Multiple instances of hypixel-api-reborn are found so we merged them for you. Please refrain from spawning multiple instances in the future. For more information, join our Discord Server https://discord.gg/NSEBNMM.',
  INVALID_HEADERS:
    '[hypixel-api-reborn] Invalid Headers are provided in ClientOptions. For help join our Discord Server https://discord.gg/NSEBNMM',
  INVALID_CACHE_HANDLER:
    '[hypixel-api-reborn] An invalid cache handler is provideed. For help join our Discord Server https://discord.gg/NSEBNMM',
  UNEXPECTED_ERROR:
    "[hypixel-api-reborn] The data provided to hypixel API is malformed and thus not recognized by hypixel, but this shouldn't be your fault. Please report this error in our Discord Server https://discord.gg/NSEBNMM or GitHub. ",
  RATE_LIMIT_EXCEEDED:
    "[hypixel-api-reborn] The rate limitations on your API Key has been exceeded. There might be an outage (Check Hypixel's status page), or you simply did too many requests in a short time. Hint: Enable rate limit options! They can help you avoid this error! For help join our Discord Server https://discord.gg/NSEBNMM",
  NO_SKYBLOCK_PROFILES: '[hypixel-api-reborn] The player has no skyblock profiles.',
  INVALID_SILENT_OPTION: '[hypixel-api-reborn] Invalid Value for silent : must be a boolean',
  INVALID_UPDATE_OPTION: '[hypixel-api-reborn] Invalid Value for update : must be a boolean',
  INVALID_THIRD_PARTY_API_OPTION: '[hypixel-api-reborn] Invalid Third Party API option : must be a boolean or string',
  BAD_AUCTION_FILTER:
    '[hypixel-api-reborn] Unexpected filter for Client#getSkyblockAuction. Expected one of "PLAYER", "AUCTION", "PROFILE", but got something else.',
  RECENT_REQUEST:
    '[Hypixel-API-Reborn] You have requested that player recently. Try turning on cache. For help join our Discord Server https://discord.gg/NSEBNMM'
};
