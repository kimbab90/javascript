const fs = require('fs');

const data = '가나다라마사바';

fs.writeFile('./sample.txt', data, 'utf-8', (error) => {
  if (error) {
    throw error;
  } else {
    console.log('Success');
  }
});

fs.readFile('./sample.txt', 'utf-8', (error, result) => {
  if (error) {
    throw error;
  } else {
    console.log(result);
  }
});