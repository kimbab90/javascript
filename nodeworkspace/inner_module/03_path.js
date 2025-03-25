console.log(__filename);
console.log(__dirname);

const path = require('path');

console.log('폴더정보 : ', path.dirname(__filename));
console.log('실제 파일명 : ', path.basename(__filename));
console.log('확장자정보 : ', path.extname(__filename));