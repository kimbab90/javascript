const express = require('express');
const app = express();

const port = 5000;
const host = 'localhost';

app.listen(port, ()=> {
  console.log('server start');
  console.log(`http://${host}:${port}`);
});

app.get('/', (request, response, next) => {
  response.send('/');
});

app.get('/emps', (request, response, next) => {
  response.send('/emps');
});

app.post('/emps');

app.put('/emps/100');

app.delete('/emps/100');
