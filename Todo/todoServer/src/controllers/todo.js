const Todo = require("../models/todomodel")
const addtodo = async (req, res) => {
    let todo = await Todo.create(req.body)
    res.status(200).json({
        todo: todo
    })
}
const gettodo = async (req, res) => {
    let todo = await Todo.find()
    res.status(200).json({
        todo: todo
    })
}
const updatetodo = async (req, res) => {
    console.log('req.params.id', req.params.id);
    let todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json({
        todo: todo
    })
}
module.exports = { addtodo, gettodo, updatetodo }