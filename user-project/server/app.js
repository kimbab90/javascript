require('dotenv').config({
  path: './database/dbConfig.env'
})

const express = require('express');
const app = express();
const router = require('./router/user_router.js');

// 미들웨어
app.use(express.urlencoded({
  extended: false
}));

app.use(express.json());

// 포트설정
app.listen('3000', (err)=> {
  console.log('Server start');
  console.log('http://localhost:3000');
  console.log(err);
});

// 라우팅
app.get('/', (req, res) => {
  res.send('Welcome, users');
});

app.use('/users', router);