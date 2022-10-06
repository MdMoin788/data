const mongoose = require("mongoose")

const connectiondatabase = () => {
    mongoose.connect('mongodb://localhost:27017/mydata').then((data) => {
        console.log("data base is conneccted " + data.connection.host)
    }).catch((error) => {
        console.log(`data base is give error ${error}`)
    })
}
module.exports = connectiondatabase