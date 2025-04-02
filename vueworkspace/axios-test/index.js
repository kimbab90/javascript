const axios = require('axios');

// fetch('http://localhost:3000/customers')
//   .then(res => res.json())
//   .then(res => {
//     console.log('fetch get');
//     console.log(`\t`, res);
//   })
//   .catch(err => console.log(err));

// axios('http://localhost:3000/customers')
//   .then(res => {
//     console.log('axios get');
//     console.log(`\t`, res.data);
//   })
//   .catch(err => console.log(err));

// axios('http://localhost:3000/customers/1')
//   .then(res => {
//     console.log('axios get 1');
//     console.log(`\t`, res.data);
//   })
//   .catch(err => console.log(err));

// axios.get('http://localhost:3000/customers/1')
//   .then(res => {
//     console.log('axios get 1');
//     console.log(`\t`, res.data);
//   })
//   .catch(err => console.log(err));

let info = {
  name: "Test",
  email: "test@mail.com",
  phone: "010-0000-1111",
  address: "Test"
};

let info2 = {
  name: "Test2",
  email: "test2@mail.com",
  phone: "010-0000-1112",
  address: "Test2"
};

// fetch('http://localhost:3000/customers',
//   {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(info),
//   }
// )
// .then(res => res.json())
// .then(res => {
//   console.log('fetch post');
//   console.log(`\t`, res);
// })
// .catch(err => console.log(err));

// axios.post('http://localhost:3000/customers', info)
//   .then(res => {
//     console.log('axios post');
//     console.log(`\t`, res.data);
//   })
//   .catch(err => console.log(err));

  axios.put('http://localhost:3000/customers/16', info2)
  .then(res => {
    console.log('axios post');
    console.log(`\t`, res.data);
  })
  .catch(err => console.log(err));

  //
axios('http://localhost:3000/customers')
  .then(res => {
    console.log('axios get');
    console.log(`\t`, res.data);
  })
  .catch(err => console.log(err));