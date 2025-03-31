const mapper = require('../mapper/emp_mapper.js');

const findAll = async () => {
  let list = await mapper.query('selectAll');
  return list;
};

const findById = async (id) => {
  let list = await mapper.query('selectById', [id]);
  return list[0];
};

const addEmp = async (emp) => {
  let columns = ['first_name', 'last_name', 'email', 'gender', 'ip_address' ];
  let item = await mapper.query('insertEmp', arrayConverter(emp, columns));
  return item;
};

const modifyEmp = async (emp, id) => {
  let item = await mapper.query('updateEmp', [emp, id]);
  return item;
};

const removeEmp = async (id) => {
  let item = await mapper.query('deleteEmp', [id]);
  return item;
};

function arrayConverter(object, columns) {
  let result = [];
  for (let column of columns) {
    result.push(object[column]);
  }
  return result;
}

module.exports = {
  findAll,
  findById,
  addEmp,
  modifyEmp,
  removeEmp,
}