const express= require('express')
const app = express()
const path = require('path');
const cors = require('cors');
const {logger} = require ('./middleware/logEvents')
const PORT = process.env.PORT || 3500
//route defines how an application responds to a client request to a particular endpoint.
app.use(logger)
const whitelist = ['https://www.yoursite.com','http://127.0.0.1:5500','http://localhost:3500']
const corsOptions={
    origin:(origin,callback)=>{
        if(whitelist.indexOf(origin)!== -1){
            callback(null,true)
        }else{
            callback(new Error('not allowed by cors'))
        }
    },
    optionsSuccessStatus:200
}
app.use(cors(corsOptions))




app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(path.join(__dirname,'/public')))

app.get('/',(req,res)=>{
   res.sendFile('./views/index.html',{root:__dirname})
   res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/old-page.html',(req,res)=>{
    res.redirect(301,'/new-page.html')
})



app.get('/new-page.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','new-page.html'))
})
//get requests retrieve data  from the server.
app.get('/about',(req,res)=>{
    res.send('<h1>About Us</h1><p>This is a simple Express app.</p>')
})
app.get('/contact',(req,res)=>{
    res.json({
        page:'contact',
        email:'contact@example.com'
    })
})

// app.get('*',(req,res)=>{
//     res.status(404).sendFile(path.join(__dirname,'views','404.html'))
// })

app.get('/hello.html',(req,res,next)=>{
    console.log('yeet yeet')
    next()
},(req,res)=>{
    res.send('hello word')
})

//




app.listen(PORT,()=>console.log(`server running on port${PORT}`))