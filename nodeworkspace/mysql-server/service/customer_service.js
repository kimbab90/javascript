const mariaDB = require('../mapper/mapper.js');

const findAll = async () => {
  let list = await mariaDB.query('selectAll');
  return list;
};

const findById = async (id) => {
  let list = await mariaDB.query('selectById', [id]);
  return list[0];
};

const findBySearch = async (key, value) => {
  let querys = {
    'N': 'selectBySearch'
  }
  let query = 'selectAll';
  if (querys[key]) {
    query = querys[key];
  }
  let list = await mariaDB.query(query, [value]);
  return list;
};

const addCustomer = async (customer) => {
  let columns = ['name', 'email', 'phone', 'address'];
  let item = await mariaDB.query('insertCustomer', arrayCoverter(customer, columns));
  return item;
};

const modifyCustomer = async (customer, id) => {
  // let columns = ['name', 'email', 'phone', 'address', 'id'];
  let item = await mariaDB.query('updateCustomer', [customer, id]);
  return item;
};

const removeCustomer = async (id) => {
  let item = await mariaDB.query('deleteCustomer', [id]);
  return item;
};

const arrayCoverter = (object, columns) => {
  let array = [];
  for (let column of columns) {
    array.push(object[column]);
  }
  return array;
};

module.exports = {
  findAll,
  findById,
  findBySearch,
  addCustomer,
  modifyCustomer,
  removeCustomer,
}