const express = require('express');
const app = express();
const router = require('./router/emp_router.js');

const port = 5000;
const host = 'localhost';

app.listen(port, () => {
  console.log('server start');
  console.log(`http://${host}:${port}`);
});

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

app.use('/emps', router);

app.get('/', (request, response, next) => {
  console.log('get/')
  response.send('index');
});

app.use((err, req, res, next) => {
  res.status(500).json({
    statusCode: res.statusCode,
    errMessage: err.message
  });
  // res.status(500).sendFile('*.html');
});

app.get('/error', (req, res, next) => {
  next(new Error('Process failed'));
})

app.use(express.static('./image'));

app.use('/static',express.static('./image'));