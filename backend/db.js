/**
 * Todo {
 * title: string,
 * description: string,
 * completed: boolean
 * }
 */


const mongoose = require("mongoose");
//mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos  
//.env file
mongoose.connect("mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: boolean
})

const todo = mongoose.model("todos", todoSchema)  

module.exports = {
   todo
}