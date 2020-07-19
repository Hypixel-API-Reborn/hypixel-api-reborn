# Guild
## Properties
| Property name  |            Description             |               Type                |
| :------------: | :--------------------------------: | :-------------------------------: |
|       id       |              Guild ID              |              string               |
|      name      |             Guild name             |              string               |
|  description   |         Guild description          |              string               |
|   experience   |          Guild experience          |              number               |
|     level      |            Guild level             |              number               |
|   createdAt    |  Guild creation time as timestamp  |              number               |
|    joinable    |      If the guild is joinable      |              boolean              |
| publiclyListed |  If the guild is listed publicly   |              boolean              |
|      tag       |             Guild tag              |              string               |
|    tagColor    |          Guild tag color           | Array&lt;[Color](../Color.js)&gt; |
|   legacyRank   |      Legacy rank of the guild      |              number               |
|  achievements  | Achievements and progress of guild |              object               |
| preferredGames |    Preferred games of the guild    |  Array&lt;[Game](../Game.js)&gt;  |

## Getters
|  Getter name  |                               Description                                |                   Return type                    |
| :-----------: | :----------------------------------------------------------------------: | :----------------------------------------------: |
|    members    |                    Returns an array of guild members                     |    Array&lt;[GuildMember](GuildMember.js)&gt;    |
| memberUUIDMap | Returns a map of guild members, with the key being the guild member UUID | Map&lt;string, [GuildMember](GuildMember.js)&gt; |
|     ranks     |         Returns an array of guild ranks, sorted by rank priority         |      Array&lt;[GuildRank](GuildRank.js)&gt;      |

# GuildMember
## Properties
|   Property name    |                            Description                            |  Type  |
| :----------------: | :---------------------------------------------------------------: | :----: |
|        uuid        |                         Guild member UUID                         | string |
|      joinedAt      |      Date of the guild member joining the guild as timestamp      | number |
| questParticipation |              Quest participation of the guild member              | number |
|        rank        |                  Guild rank of the guild member                   | string |
|     mutedUntil     | Timestamp of when the guild member will be unmuted in their guild | number |
|  weeklyExperience  |               Weekly experience of the guild member               | number |

# GuildRank
## Properties
| Property name |                    Description                     |  Type   |
| :-----------: | :------------------------------------------------: | :-----: |
|     name      |               Name of the guild rank               | string  |
|    default    | If the guild rank is the default rank of the guild | boolean |
|      tag      |             Chat tag of the guild rank             | string  |
|   createdAt   |    Timestamp of when the guild rank was created    | number  |
|   priority    |             Priority of the guild rank             | number  |