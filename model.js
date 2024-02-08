const mongoose = require("mongoose")

//connection
mongoose.connect("mongodb+srv://nooranaazer:nooranazer@cluster0.42qvjqx.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected")
})
.catch(err=>console.log(err))

let mongoSchema = mongoose.Schema
const employeeSchema = new mongoSchema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number

}) 
var employeeModel = mongoose.model("employee",employeeSchema)
module.exports  = employeeModel