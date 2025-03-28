const selectAll =
  `SELECT 
id, 
name, 
email, 
phone, 
address 
FROM customers
ORDER BY id`;

const selectById =
  `SELECT 
id, 
name, 
email, 
phone, 
address 
FROM customers
WHERE id = ?`;

const selectBySearch =
  `SELECT 
id, 
name, 
email, 
phone, 
address 
FROM customers
WHERE name LIKE CONCAT('%', ?, '%')`;

const insertCustomer =
  `INSERT INTO customers
(name, email, phone, address)
VALUES
(?, ?, ?, ?)`;

const updateCustomer =
  `UPDATE customers 
  SET ?
WHERE id = ?`;

const deleteCustomer =
  `DELETE FROM customers
WHERE id = ?`;

module.exports = {
  selectAll,
  selectById,
  selectBySearch,
  insertCustomer,
  updateCustomer,
  deleteCustomer,
}