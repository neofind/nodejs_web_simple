const express = require('express');
const app = express();
// const ejs = require('ejs');

app.set('port', process.env.PORT | 8080);

app.use('/', express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  console.log('received GET /');
  res.render('index.ejs', { 'hostname': process.env.HOSTNAME || 'localhost' });
});

app.listen(app.get('port'), (err) => {
  if (err) throw err;
  console.log(`server listening on port ${app.get('port')}`);
});
