// 1.importing the express
const express = require('express')
const employeemodel= require('./model')

// 2.initialise express
const app = new express()

//3 adding middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//3.api creation
app.get('/',(req,res)=>{
    res.send("messege from server")
    
})

app.get('/trial',(req,res)=>{
    res.send("hlo")
})

app.get('/data',(req,res)=>{
    res.json({"Name":"Nooranazer","age":18})
})




app.post('/postdata',(req,res)=>{
    console.log(req.body)
    res.send("data added")
})


//4.setting port
app.listen(8080,()=>{
    console.log("port 8080 is up and running")
})

//api to view data from db
app.get('/view',async(req,res)=>{
    let result = await employeemodel.find();
    res.json(result);
})

//deleting a documnet
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params);
    let id = req.params.id
    await employeemodel.findByIdAndDelete(id);
    res.json({message:'deleted'})
})


//to update
app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id
    await employeemodel.findByIdAndDelete(id,req.body);
    res.send("updated")
})