const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();

const corsOption = {
  origin: 'http://127.0.0.1:5500',
  optionSuccessStatus: 200
};

app.use(cors(corsOption));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    let savedFile = (new Date()).valueOf() + path.basename(file.originalname);
    cb(null, savedFile);
  }
});

const upload = multer({
  storage: storage
});

app.listen(5000, () => {
  console.log('server start');
});

app.post('/profile', upload.single('avatar'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.end();
});

app.post('/photos', upload.array('photos', 8), (req, res) => {
  for (let file of req.files) {
    console.log(file);
  }
  res.end();
});