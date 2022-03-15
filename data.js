const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type : String, requuired : true
        },
   
    email : {
        type : String, required : true
    },
    mobile : {
        type : Number, required : true
    },
    gender : {
        type : String , required : true
    }
})
const User = mongoose.model('Data',UserSchema)
module.exports = User;