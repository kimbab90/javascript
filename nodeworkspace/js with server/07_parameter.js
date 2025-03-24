function say(message) {
  let msg = message == undefined ? 'No message!' : message;
  console.log(msg);
}

say('Hello');

say();

function say2(message = 'No message!') {
  console.log(message);
}

say2('Hello');

say2();

const plus = (x, y, ...args) => {
  let result = x + y;
  for (let val of args) {
    result += val;
  }
  return result;
};

console.log(plus(1,2,3,4,5));
console.log(plus(1,2,3,4,5,6,7,8,9,10));


