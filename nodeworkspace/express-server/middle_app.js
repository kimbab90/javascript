const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');

const sessionSetting = session({
  secret: 'HIEHB@*$!BD&$T^DH*!E',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 60000
  }
});

app.use(sessionSetting);

app.use(express.json());

// app.use(cors());

const corsOption = {
  origin : 'http://192.168.0.49:5500',
  optionSuccessStatus: 200
};

app.use(cors(corsOption));

app.listen(3000, () => {
  console.log('http://localhost:3000');
});

app.use('/', (err, req, res, next) => {
  res.json({
    statusCode: res.statusCode,
    errMessage: err.message
  });
});

app.get('/', (req, res) => {
  res.send(req.session);
});

app.post('/login', (req, res) => {
  const {
    id,
    pwd
  } = req.body;
  req.session.user = id;
  req.session.pwd = pwd;
  req.session.save((err) => {
    if (err) next(err);
    // res.redirect('/');
    res.json(req.session);
  });
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
})