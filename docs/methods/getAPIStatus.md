# getAPIStatus
Allows you to get the Hypixel API's Status and past Incidents, no key needed.
## Arguments

## Example usage
```js
const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client('API-KEY');
// https://stavzdev.is-inside.me/cCMiZdoy.gif

hypixel.getAPIStatus().then(apistatus => {
  console.log(apistatus);
}).catch(e => {
  console.error(e);
});

// async/await
const apistatus = await hypixel.getAPIStatus().catch(e => console.error(e));
console.log(apistatus);
```
## Example response
```js
APIStatus {
  sourceUrl: null,
  title: 'Hypixel Status - Incident History',
  description: 'Statuspage',
  incidents: [
    APIIncident {
      link: 'https://status.hypixel.net/incidents/v1kgjvxxbcrk',
      start: 2021-01-15T20:06:01.000Z,
      startFormatted: 'Fri, 15 Jan 2021 15:06:01 -0500',
      startTimestamp: 1610741161000,
      author: null,
      HTMLContent: '\n' +
        "<p><small>Jan <var data-var='date'>15</var>, <var data-var='time'>15:06</var> EST</small><br><strong>Completed</strong> - The scheduled maintenance has been completed.</p><p><small>Jan <var data-var='date'>15</var>, <var data-var='time'>07:55</var> EST</small><br><strong>Update</strong> - Maintenance is currently still in progress, maintenance will last a few hours longer than originally intended.</p><p><small>Jan <var data-var='date'>14</var>, <var data-var='time'>09:30</var> EST</small><br><strong>In progress</strong> - Scheduled maintenance is currently in progress. We will provide updates as necessary.</p><p><small>Jan <var data-var='date'>14</var>, <var data-var='time'>09:10</var> EST</small><br><strong>Scheduled</strong> - SkyBlock will be undergoing maintenance for a game update. There is not currently an exact ETA for when the maintenance will end.</p>      ",
      snippet: 'Jan 15, 15:06 EST\n' +
        'Completed - The scheduled maintenance has been completed.\n' +
        'Jan 15, 07:55 EST\n' +
        'Update - Maintenance is currently still in progress, maintenance will last a few hours longer than originally intended.\n' +
        'Jan 14, 09:30 EST\n' +
        'In progress - Scheduled maintenance is currently in progress. We will provide updates as necessary.\n' +
        'Jan 14, 09:10 EST\n' +
        'Scheduled - SkyBlock will be undergoing maintenance for a game update. There is not currently an exact ETA for when the maintenance will end.',
      TextContent: '\n' +
        'Jan 15, 15:06 ESTCompleted - The scheduled maintenance has been completed.Jan 15, 07:55 ESTUpdate - Maintenance is currently still in progress, maintenance will last a few hours longer than originally intended.Jan 14, 09:30 ESTIn progress - Scheduled maintenance is currently in progress. We will provide updates as necessary.Jan 14, 09:10 ESTScheduled - SkyBlock will be undergoing maintenance for a game update. There is not currently an exact ETA for when the maintenance will end.      ',
      guid: 'v1kgjvxxbcrk',
      categories: []
    },
    ...
  ]
}
```
## Links
- [getAPIStatus](https://hypixel-api-reborn.github.io/#/docs/main/master/class/Client?scrollTo=getAPIStatus)
- [APIStatus](https://hypixel-api-reborn.github.io/#/docs/main/master/class/APIStatus)
- [APIIncident](https://hypixel-api-reborn.github.io/#/docs/main/master/class/APIIncident)