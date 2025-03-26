const express = require('express');
const router = express.Router();
const {
  query
} = require('../mapper/emp-map.js');

router.get('/', (request, response, next) => {
  console.log('get/emps');
  let result = query('SELECT');
  response.json(result);
});

router.get('/:empId', (request, response, next) => {
  console.log('get/emps/:empId');
  let empId = request.params.empId;
  let result = query('SELECT', null, {
    id: empId
  });
  response.json(result[0]);
});

router.post('/', (request, response, next) => {
  console.log('post/emps');
  let body = request.body;
  query('INSERT', body);
  response.json({
    "result": "success"
  });
});

router.put('/:empId', (request, response, next) => {
  console.log('put/emps');
  let body = request.body;
  let empId = request.params.empId;
  query('UPDATE', body, {
    id: empId
  });
  response.json({
    "result": "success",
    "id": empId
  });
});

router.put('/', (request, response, next) => {
  console.log('put/emps');
  let body = request.body;
  query('UPDATE', body, {
    id: body["id"]
  });
  response.json({
    "result": "success"
  });
});

router.delete('/:empId', (request, response, next) => {
  console.log('delete/emps/:empId');
  let empId = request.params.empId;
  query('DELETE', null, {
    id: empId
  });
  response.status(204).send('delete');
});

module.exports = router;