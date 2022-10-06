import express from  "express"
import dotenv from "dotenv"
const app = express()
import  {getuser, user} from "./userrouter/user.js"
const PORT = 4000
import {Connect} from "./database/db.js"
import cors from "cors"
app.use(express.json())
app.use(cors())
app.post("/user",user)
app.get("/user",getuser)


app.listen(PORT, () => {
    Connect()
    console.log(`server is running on Port: http://localhost:${PORT}`)
})