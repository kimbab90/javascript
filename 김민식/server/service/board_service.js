
const mariaDB = require('../database/mapper.js');

//board
async function findAll() {
  let result = await mariaDB.query('selectAll')
  .catch(err => console.log(err));
  return result;
};

async function findByNo(no) {
  let result = await mariaDB.query('selectByNo', [no])
  .catch(err => console.log(err));
  return result[0];
}

async function addBoard(data) {
  let columns = ['title', 'writer', 'content'];
  let result = await mariaDB.query('insertBoard', objectToArray(data, columns))
  .catch(err => console.log(err));
  return result;
};

async function modifyBoard(data, no) {
  let UpdateData = {
    title: data.title,
    writer: data.writer,
    content: data.content,
  }
  let result = await mariaDB.query('updateBoard', [UpdateData, no])
  .catch(err => console.log(err));
  return result;
};

//comment
async function findCommentAll(no) {
  let result = await mariaDB.query('selectCommentAll', [no])
  .catch(err => console.log(err));
  return result;
}

function objectToArray(object, columns) {
  let array = [];
  for (let column of columns) {
    array.push(object[column]);
  }
  return array;
}

module.exports = {
  findAll,
  findByNo,
  addBoard,
  modifyBoard,
  findCommentAll,
};