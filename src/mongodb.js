const mongoose = require('mongoose');
// name: LoginDB
mongoose.connect("mongodb://localhost:27017/LoginDB")
.then(()=> {
    console.log("mongoDB connected")
}).catch(() => {
    console.log("failed to connect")
})

const LogInSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
})
// change model name everytime u use the template
const collection = new  mongoose.model('Collection1',LogInSchema)

module.exports = collection;