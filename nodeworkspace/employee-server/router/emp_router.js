const express = require('express');
const router = express.Router();
const service = require('../service/emp_service.js');

// 전제 조회
router.get("/", (req, res, next) => {
  console.log('전제 조회');
});

// 단건 조회
router.get("/:empId", (req, res, next) => {
  console.log('단건 조회');
});

// 등록
router.post("/", (req, res, next) => {
  console.log('등록');
});

// 수정
router.put("/:empId", (req, res, next) => {
  console.log('수정');
});

// 삭제
router.delete("/:empId", (req, res, next) => {
  console.log('삭제');
});


module.exports = router;