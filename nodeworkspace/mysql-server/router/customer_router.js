const express = require('express');
const router = express.Router();
const customerService = require('../service/customer_service.js')

router.get('/customers', async (req, res, next) => {
  let list = await customerService.findAll();
  res.send(list);
});

router.get('/customers/:id', (req, res, next) => {
  let id = req.params.id;
});

router.post('/customers', (req, res, next) => {
  let customer = req.body;
});

router.put('/customers/:id', (req, res, next) => {
  let id = req.params.id;
  let customer = req.body;
});

router.delete('/customers/:id', (req, res, next) => {
  let id = req.params.id;
})

module.exports = router;