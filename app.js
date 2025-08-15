const express = require("express")

const app = express()

app.get('/helloworld', (req, res)=>{
   res.send("<h1>hello word </h1>");
})



app.listen(4000,(req, res)=>{
    console.log("server is running")
})
