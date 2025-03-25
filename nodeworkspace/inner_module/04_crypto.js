const crypto = require('crypto');
const data = 'pw1234';
let secret = 'homesweethome';

// let encData = crypto.createHash('sha512').update(data).digest('hex');

// console.log(encData);

encData = crypto.createHmac('sha512', secret).update(data).digest('base64');

console.log(encData);