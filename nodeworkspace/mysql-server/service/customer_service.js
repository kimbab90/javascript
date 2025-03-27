const mariaDB = require('../mapper/mapper.js');

const findAll = async () => {
  let list = await mariaDB.query('selectAll');
  return list;
};

const findById = () => {

};

const addCustomer = () => {

};

const modifyCustomer = () => {

};

const removeCustomer = () => {

};

module.exports = {
  findAll,
  findById,
  addCustomer,
  modifyCustomer,
  removeCustomer,
}