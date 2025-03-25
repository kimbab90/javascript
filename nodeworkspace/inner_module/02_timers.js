function showDate() {
  console.log(new Date().toLocaleTimeString());
}

showDate();

const timeout = setTimeout(() => {
  showDate();
  console.log('timeout!');
}, 2000);

let count = 0;
const interval = setInterval(() => {
  showDate();
  console.log(`interval! count : ${++count}`);
  if (count == 5) {
    clearInterval(interval);
    console.log('interval cleared');
  }
}, 5000);