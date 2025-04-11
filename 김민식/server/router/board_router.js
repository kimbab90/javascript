const express = require('express');
const router = express.Router();
const service = require('../service/board_service.js');

//board
router.get('/boards', async (req, res) => {
  let result = await service.findAll();
  res.json(result);
});

router.get('/boards/:no', async (req, res) => {
  let no = req.params.no;
  let result = await service.findByNo(no);
  res.json(result);
});

router.post('/boards', async (req, res) => {
  let data = req.body;
  let result = await service.addBoard(data);
  res.json(result);
});

router.put('/boards/:no', async (req, res) => {
  let no = req.params.no;
  let data = req.body;
  let result = await service.modifyBoard(data, no);
  res.json(result);
});

//comment
router.get('/comments/:no', async (req, res) => {
  let no = req.params.no;
  let result = await service.findCommentAll(no);
  res.json(result);
});

module.exports = router;