const express = require("express")
const cors = require("cors")
const connectiondatabase = require("./src/database/database")
const router = require("./src/routes/todoRoutes")
const app = express()
app.use(express.json())
app.use(cors())
app.use("/app",router)
const PORT = 4000

app.listen(PORT, () => {
    connectiondatabase()
    console.log(`sever is running on http://localhost:${PORT}`)
})