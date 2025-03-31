require('dotenv').config({
  path: './mapper/dbConfig.env'
})
const express = require('express');
const app = express();
const router = require('./router/emp_router.js');

// 미들웨어 등록
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

// 포트 설정
app.listen('3000', (err) => {
  if (err) console.log(err);
  console.log('http://localhost:3000');
})

// root 경로 설정
app.get('/', (req, res, next) => {
  console.log('root');
  res.send('employee server');
});

// 라우터 등록
app.use('/emp', router);