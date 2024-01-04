const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password: {
        type:String,
        require:true
    },
    userName: {
        type: String,
        required : true
    }
}, {timestamps: true});

const user = mongoose.model('User', userSchema);

module.exports = user;