const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://laksh123:uQe6hF1UiDIufM6C@cluster0.wfwxa.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema)

module.exports = {
    todo
}