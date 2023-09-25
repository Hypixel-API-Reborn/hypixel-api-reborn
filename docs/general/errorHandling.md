# Error Handling

Example of error handling in `getPlayer` method.

```js
const { Errors } = require('hypixel-api-reborn');
// invalid nickname
hypixel
  .getPlayer('3424242')
  .then((player) => {})
  .catch((e) => {
    if (e.message === Errors.PLAYER_DOES_NOT_EXIST) {
      console.log(`Player doesn't exist!`);
      // here you can replace default error message with yours.
    }
  });
```
