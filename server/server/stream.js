const fs = require('fs')

const rs =  fs.createReadStream('./test.txt',{encoding: 'utf8'});

const ws =fs.createWriteStream('./newtest.txt');

// rs.on('data',(dataChunk)=>{
//     ws.write(dataChunk);
// })

rs.pipe(ws);