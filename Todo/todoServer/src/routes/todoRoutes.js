const express =require("express")
const { addtodo, gettodo, updatetodo } = require("../controllers/todo")
const router=express.Router()

router.post("/todo",addtodo)
router.get("/todo",gettodo)
router.patch("/todo/:id",updatetodo)

module.exports =router