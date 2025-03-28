const express = require('express');
const router = express.Router();
const customerService = require('../service/customer_service.js')

router.get('/customers', async (req, res, next) => {
  let list = await customerService.findAll();
  res.json(list);
});

router.get('/customers/:id', async (req, res, next) => {
  let id = req.params.id;
  let item = await customerService.findById(id);
  res.json(item);
});

router.get('/customers/:key/:value', async (req, res, next) => {
  let key = req.params.key;
  let value = req.params.value;
  let list = await customerService.findBySearch(key, value);
  res.json(list);
});

router.post('/customers', async (req, res, next) => {
  let customer = req.body;
  let item = await customerService.addCustomer(customer);
  res.json(item);
});

router.put('/customers/:id', async (req, res, next) => {
  let id = req.params.id;
  let customer = req.body;
  let item = await customerService.modifyCustomer(customer, id); 
  res.json(item);
});

router.delete('/customers/:id', async (req, res, next) => {
  let id = req.params.id;
  let item = await customerService.removeCustomer(id);
  res.json(item);
})

module.exports = router;