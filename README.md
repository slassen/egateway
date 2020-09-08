1. Ensure `nodemon` is installed globally. `npm i -g nodemon`
2. Install the server. `npm i`
3. Make a `proxy.json` file in the root directory. See example below:
```js
{
  "/api/v0": "http://localhost:4002/api/v0"
}
```