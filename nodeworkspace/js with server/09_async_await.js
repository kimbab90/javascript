async function getJSONData() {
  const result = await webServerConnect();
  console.log(1, result);
}

// function getJSONData() {
//   webServerConnect()
//   .then(response => console.log(1, response))
//   .catch((error) => console.log(error));
// }

async function webServerConnect() {
  return fetch('https://jsonplaceholder.typicode.com/posts/1', {
      headers: {
        'Cache-Control': 'no-cache'
      }
    })
    .then(response => response.json())
    .catch((error) => console.log(error));
}

getJSONData();
console.log(2);