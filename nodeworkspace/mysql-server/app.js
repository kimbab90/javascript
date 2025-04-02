require('dotenv').config({
  path: './mapper/dbConfig.env'
})
// console.log(process.env);
const express = require('express');
const app = express();
const customerRouter = require('./router/customer_router.js');
// const cors = require('cors');

// app.use(cors({
//   origin: 'http://localhost:8081',
// }));

app.use(express.urlencoded({
  extended: false
}));

app.use(express.json());

app.listen(3000, (error) => {
  console.log('server start');
  console.log('http://localhost:3000');
});

//router
app.get('/', (req, res, next) => {
  res.send('welcome');
});


app.use('/', customerRouter);

//test
