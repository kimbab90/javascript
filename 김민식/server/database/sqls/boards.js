//board
const selectAll = 
`
SELECT 
  no,
  title,
  writer,
  content,
  created_date,
  updated_date,
  (SELECT 
  COUNT(*) 
  FROM t_comment_board AS cb 
  WHERE cb.bno = bb.no) AS comment_count
FROM t_board_board AS bb  
ORDER BY no
`

const selectByNo =
`
SELECT
  no,
  title,
  writer,
  content,
  created_date,
  updated_date
FROM t_board_board
WHERE no = ?
`

const insertBoard =
`
INSERT INTO t_board_board
(title, writer, content, created_date)
VALUES
(?, ?, ?, CURRENT_TIMESTAMP)
`

const updateBoard =
`
UPDATE t_board_board
SET ?,
updated_date = CURRENT_TIMESTAMP
WHERE no = ?
`
//comment
const selectCommentAll =
`
SELECT
no,
writer,
content,
created_date,
updated_date,
bno
FROM t_comment_board
WHERE bno = ?
`

module.exports = {
  selectAll,
  selectByNo,
  insertBoard,
  updateBoard,
  selectCommentAll,
}