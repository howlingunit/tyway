import express from 'express';

const app = express();
const myLogger = function (req, res, next) {
  const date = new Date();

  const { url, path: routePath } = req;
  console.log('' + date.toUTCString() + ' - IP (' + req.socket.remoteAddress + ') URL (' + url + '), PATH (' + routePath + ').');

  next();
};

app.use(myLogger);

app.use(express.static('static'));

app.listen(8080);
