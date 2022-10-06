const express = require("express")
const cors = require("cors");
const connectiondb = require("./db/database");
const PORT = 5000;
const app = express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("woorld")
})
app.listen(PORT, () => {
    connectiondb()
    console.log(`server is running on Port http://localhost:${PORT}`)
})