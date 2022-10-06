const mongoose = require("mongoose")
const connectiondb = async () => {
    await mongoose.connect("mongodb://localhost:27017/E-come").then((data) => {
        console.log(`data base ${data.connection.host}`)
    }).catch((err)=>{
        console.log(`data base get Error ${err}`)
    })
}
module.exports = connectiondb