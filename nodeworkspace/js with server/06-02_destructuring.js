let {
  print
} = require('./06-01_module');

print('Hello');
// console.log(plus(1, 2));

let person = {
  firstName: 'Jane',
  lastName: 'Doe',
  point: 78,
  city: '서울'
};

let {
  firstName,
  point
} = person;

console.log(firstName, point);

let array = [1, 2, 3, 4, 5];

let [x, y, z] = array;

console.log(x, y, z);

function getFullName({
  firstName,
  lastName
}) {
  console.log(`${firstName} ${lastName}`);
}

getFullName(person);