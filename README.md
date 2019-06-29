# Express.js on Netlify Example

[![Deploy to
Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/neverendingqs/netlify-express)

An example of how to host an Express.js app on Netlify using
[serverless-http](https://github.com/dougmoscrop/serverless-http). See
[How to run Express.js apps with Netlify Functions](https://www.netlify.com/blog/2018/09/13/how-to-run-express.js-apps-with-netlify-functions/) for details.

[index.pug](views/index.pug) simply loads html from the Express.js app using `<object>`, and the
app is hosted at `/.netlify/functions/server`. 

## Demo

Check out a working demo of this application at [some-link.com]().

## Build

Ensure you have [Node.js](https://nodejs.org/en/) installed, then:

``` bash
npm install
npm start
```

### Entry Point

[`server-local.js`](server-local.js) is our entry point. If you have nodemon, run:

``` bash
nodemon server-local.js
```