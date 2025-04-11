const express = require('express');
const router = express.Router();
const service = require('../service/user_service.js');

//전체조회
router.get('/', async (req, res) => {
  let result = await service.findAll();
  res.json(result);
});

//단건조회
router.get('/:no', async (req, res) => {
  let no = req.params.no;
  let result = await service.findByNo(no);
  res.json(result);
});

//추가
router.post('/', async (req, res) => {
  let data = req.body;
  let result = await service.addUser(data);
  res.json(result);
});

//수정
router.put('/:no', async (req, res) => {
  let no = req.params.no;
  let data = req.body;
  let result = await service.modifyUser(data, no);
  res.json(result);
});

//삭제
router.delete('/:no', async (req, res) => {
  let no = req.params.no;
  let result = await service.removeUser(no);
  res.json(result);
});

module.exports = router;