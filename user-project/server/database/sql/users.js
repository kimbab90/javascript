//database/sql/users.js
//Table : t_users
const selectAll = 
`
SELECT 
  user_no,
  user_id,
  user_pwd,
  user_name,
  user_gender,
  user_age,
  join_date
FROM t_users
`

const selectByNo =
`
SELECT
  user_no,
  user_id,
  user_pwd,
  user_name,
  user_gender,
  user_age,
  join_date
FROM t_users
WHERE user_no = ?
`

const insertUser =
`
INSERT INTO t_users
(user_id, user_pwd, user_name, user_gender, user_age)
VALUES
(?, ?, ?, ?, ?)
`

const updateUser =
`
UPDATE t_users
SET ?
WHERE user_no = ?
`

const deleteUser =
`
DELETE FROM t_users
WHERE user_no = ?
`

module.exports = {
  selectAll,
  selectByNo,
  insertUser,
  updateUser,
  deleteUser
}