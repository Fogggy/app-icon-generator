console.log('Starting');

const fs = require('fs');
const path = require('path');
const gm = require('gm');

const sourceFile = __dirname+'/gardening.jpg';
const targetFile = __dirname+'/gardening-1.jpg';

console.log(process.argv);

gm(sourceFile)
  .resize(353, 257)
  .autoOrient()
  .write(targetFile, function (err) {
    if (!err) console.log(' hooray! ');
  });
