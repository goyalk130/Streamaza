const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter your name"],
        maxlength:[30,"Name cannot exceed 30 char"],
        minlength:[4,"Name cannot be less than 4 char"]
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        unique:true,
        validate:[validator.isEmail,"Please enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"please enter a Password"],
        minlength:[8,"Password should be greater than 8 char"],
        select:false
    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }

    this.password = await bcrypt.hash(this.password,10)
})

userSchema.methods.comparePassword = async function (enteredPassword){
    console.log(this.password)
    console.log(enteredPassword)
    return (await bcrypt.compare(enteredPassword,this.password))
}

userSchema.methods.getJwtToken = function(){
    return (jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    }))
}
module.exports = mongoose.model("User",userSchema,)