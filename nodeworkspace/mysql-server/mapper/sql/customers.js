const selectAll =
  `select 
id, 
name, 
email, 
phone, 
address 
from customers
order by id`;



module.exports = {
  selectAll,
}