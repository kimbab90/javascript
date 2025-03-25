const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('Server connected');
})

app.listen(3000, () => {
  console.log('Server start');
  console.log('http://localhost:3000');
});