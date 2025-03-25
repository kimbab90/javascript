let timeAsync = new Promise((resolve, reject) => {

  let result = false;

  setTimeout(() => {
    console.log('asynchronous operation')
    result = true;
    if (result) {
      resolve('result : success');
    } else {
      reject(new Error('result : reject'));
    }
  }, 3000)
});

timeAsync
  .then((success) => {
    console.log(success);
    return 'first operation done'
  }, (fail) => {
    console.log(fail);
  })
  .then((success) => {
    console.log(success);
    throw new Error('Error occurred on second operation');
  })
  .catch((error) => console.log(error));

console.log(timeAsync);
console.log('operation done');