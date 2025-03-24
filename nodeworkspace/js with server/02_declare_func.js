
let result = plus(3, 3);
console.log(result);

function plus(x, y) {
  return x + y;
}

function plus(x, y) {
  return x * y;
}

// 중복 가능, 마지막 함수 적용, 하단에 선언
function plus(x, y, z) {
  return x + y + z;
}

// 중복 불가, 상단에 선언
const printMsg = function(keyword) {
  return 'result : ' + keyword;
}

//
let array = [1,2,3,4,5];
array.forEach((item) => {
  console.log(item);
});

const highFunc = function(num) {
  return (x) => {
    return x + num;
  }
}

const addNum = highFunc(10);
result = addNum(5);
console.log(result);

const sum =  (x, y) => x * y;
console.log(sum(2, 4));