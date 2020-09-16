const express = require('express');

const app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.static(`${__dirname}/src`));

app.listen(app.get('port'), function () {
  console.log(`Node app is running at localhost: ${app.get('port')}`);
  console.log(__dirname);
});
