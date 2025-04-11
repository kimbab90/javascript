
const mariaDB = require('../database/mapper.js');

async function findAll() {
  let result = await mariaDB.query('selectAll')
  .catch(err => console.log(err));
  return result;
};

// async function findByNo(no) {
//   let result = await mariaDB.query('selectByNo', [no])
//   .catch(err => console.log(err));
//   return result[0];
// };

const findByNo = async (no) => {
  let result = await mariaDB.query('selectByNo', [no])
  .catch(err => console.log(err));
  return result[0];
}

async function addUser(data) {
  let columns = ['user_id', 'user_pwd', 'user_name', 'user_gender', 'user_age'];
  let result = await mariaDB.query('insertUser', objectToArray(data, columns))
  .catch(err => console.log(err));
  return result;
};

async function modifyUser(data, no) {
  let result = await mariaDB.query('updateUser', [data, no])
  .catch(err => console.log(err));
  return result;
};

async function removeUser(no) {
  let result = await mariaDB.query('deleteUser', [no])
  .catch(err => console.log(err));
  return result;
};

function objectToArray(object, columns) {
  let array = [];
  for (let column of columns) {
    array.push(object[column]);
  }
  return array;
}

module.exports = {
  findAll, findByNo, addUser, modifyUser, removeUser
};