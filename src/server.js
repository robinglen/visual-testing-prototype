const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = 8080;

app.use(express.static('static'));

http.listen(port, () => {
  console.log('START-APP',{port:port});
});
