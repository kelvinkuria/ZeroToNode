// console.log("Hi")

// //console.log(global)

// const os = require('os')
// const path = require('path')
// const { add,subtract,multiply,divide } = require("./math")
// // console.log(os.type())
// // console.log(os.homedir())
// // console.log(os.version())

// // console.log(__dirname)
// // console.log(__filename)

// // console.log(path.dirname(__filename))
// // console.log(path.basename(__filename))
// // console.log(path.extname(__filename))

// // console.log(path.parse(__filename))
// console.log(add(2, 3))
// console.log(subtract(2, 3))
// console.log(multiply(2, 3))
// console.log(divide(2, 3))


const fsPromises = require('fs').promises;
const { hasUncaughtExceptionCaptureCallback } = require('process');

const path = require('path')

const fileOps = async (params) => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname,'test.txt'),'utf8')
        console.log(data)
        await fsPromises.unlink(path.join(__dirname,'delete.txt'))
        await fsPromises.writeFile(path.join(__dirname,'testComplete.txt'),data)
        await fsPromises.appendFile(path.join(__dirname,'test.txt'),'\n\n nice tosee you lil.how is mommy boy')
        await fsPromises.rename(path.join(__dirname,'starter.txt'),'starterComplete.txt')
        const newData = await fsPromises.readFile(path.join(__dirname,'testComplete.txt'),'utf8')
        console.log(newData)
        
    } catch (error) {
       console.error(error) 
    }
}
fileOps()

// fs.readFile(path.join(__dirname,'starter.txt'),'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);

// })

// console.log('Hello...')

// fs.writeFile(path.join(__dirname,'nganuthia.txt'),'nice to see you lil nigga',(err)=>{
//     if(err) throw err;
//     console.log("wassup lil beat");

// fs.appendFile(path.join(__dirname,'nganuthia.txt'),'\n\nYes it is',(err)=>{
//     if(err) throw err;
//     console.log("append lil beat");

//     fs.rename(path.join(__dirname,'nganuthia.txt'),'newnganuthia',(err)=>{
//     if(err) throw err;
//     console.log("rename lil beat");
//     })

// })



// })




process.on('uncaughtException',err =>{
    console.error(`uncaught error ${err}`)
    process.exit(1)
})