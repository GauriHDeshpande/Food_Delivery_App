const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

// pre-save is a trigger that gets a function and execute before the user object is saved.

userSchema.pre("save", async function encryptPassword(next){
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

userSchema.methods.isValidPassword = async function checkValidity(password){
    const user = this;
    const compare = bcrypt.compare(password, user.password);
    return compare;
}

const user = mongoose.model('User', userSchema);

module.exports = user;