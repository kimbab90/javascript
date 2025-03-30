const selectAll =
    `SELECT
    id,
first_name,
last_name,
email,
gender,
ip_address
FROM employees
ORDER BY id`;

const selectById =
    `SELECT
    id,
first_name,
last_name,
email,
gender,
ip_address
FROM employees
WHERE id = ?`;

const insertEmp =
    `INSERT INTO employees
    (first_name, last_name, email, gender, ip_address)
    VALUES
    (?, ?, ?, ?, ?)`;

const updateEmp =
    `UPDATE employees
    SET ?
    WHERE id = ?`;

const deleteEmp =
    `DELETE
FROM employees
WHERE id = ?`;

module.exports = {
    selectAll,
    selectById,
    insertEmp,
    updateEmp,
    deleteEmp
}