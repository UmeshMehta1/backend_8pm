const express = require("express")

// import express from "express"
const app = express()



app.get("/contact", function(req, res){
    res.json({
        "name":"umesh",
        "age":23,
        "contact number":9989879879,
        "email":"hello@gail.com"
    })
})


app.get("/contact1",(req, res)=>{
    res.json({
        "name":"umesh",
        "age":23,
        "contact number":9989879879,
        "email":"hello@gail.com"
    })
})


app.listen(4000,(req, res)=>{
    console.log("server is running")
})
