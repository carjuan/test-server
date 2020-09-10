const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(`${__dirname}/public`));

app.get('/', function (request, response) {
  response.send('Hello world');
});

app.listen(app.get('port'), function () {
  console.log(`Node app is running at localhost: ${app.get('port')}`);
});
