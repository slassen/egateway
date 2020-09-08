let express, proxy, list;
try {
  express = require('express');
  proxy = require('express-http-proxy');
  list = require('./proxy.json');
} catch (e) {
  console.error(e);
  console.error('Try \'npm i\' and that proxy.json is defined correctly. See README.');
  process.exit(1);
}

const port = process.env.PORT || 8080;
const app = express();

Object.entries(list).forEach(([key, value]) => {
  console.log(`${key} => ${value}`);
  app.use(key, proxy(value, {
    proxyReqPathResolver: (req) => {
      return req.originalUrl;
    }
  }));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
