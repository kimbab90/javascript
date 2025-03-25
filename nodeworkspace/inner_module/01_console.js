const fs = require('fs');
const { Console } = require('console');

const output = fs.createWriteStream('./logs/stdout.log');
const errorOutput = fs.createWriteStream('./logs/stderr.log');

const logger = new Console({stdout: output, stderr : errorOutput});

let count = 5;
logger.log('count : %d', count);
logger.error(`count : ${++count}`);
logger.log('count : %d', count);
logger.error(`count : ${++count}`);
