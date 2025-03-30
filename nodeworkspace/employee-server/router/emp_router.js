const express = require('express');
const router = express.Router();
const service = require('../service/emp_service.js');

// 전제 조회
router.get("/", async (req, res, next) => {
  console.log('전제 조회');
  let list = await service.findAll();
  res.send(list);
});

// 단건 조회
router.get("/:empId", async (req, res, next) => {
  console.log('단건 조회');
  let id = req.params.empId;
  let item = await service.findById(id);
  res.send(item);
});

// 등록
router.post("/", async (req, res, next) => {
  console.log('등록');
  let emp = req.body;
  let item = await service.addEmp(emp);
  res.send(item);
});

// 수정
router.put("/:empId", async (req, res, next) => {
  console.log('수정');
  let id = req.params.empId;
  let emp = req.body;
  let item = await service.modifyEmp(emp, id);
  res.send(item);
});

// 삭제
router.delete("/:empId", async (req, res, next) => {
  console.log('삭제');
  let id = req.params.empId;
  let item = await service.removeEmp(id);
  res.send(item);
});

module.exports = router;