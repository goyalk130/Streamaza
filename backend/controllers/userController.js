const CatchAsyncError = require("../middlewares/CatchAsyncError");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const { sendToken } = require("../utils/sendToken");

module.exports.registeruser = CatchAsyncError(async (req,res,next)=>{

    const {name,email,password} = req.body;

    const user =await User.create({
        name,email,password
    })

    sendToken(user,201,res)
})

module.exports.login = CatchAsyncError(async (req,res,next)=>{

    const {email,password} = req.body;

    if(!email || !password){
        return next(new ErrorHandler("Please enter both email and password",400));
    }

    const user = await  User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid email and password",401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email and password",401));
    }
    sendToken(user,200,res)
})

module.exports.logout=CatchAsyncError(async(req,res,next)=>{
    
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true
    });


    res.status(200).json({
        success:true,
        message:"Logged out"
    })
})

// get user details
module.exports.getUserDetails = CatchAsyncError(async (req,res,next)=>{

    const user = await User.findById(req.user.id)

    res.status(200).json({
        success:true,
        user
    })
})

// update user profile
module.exports.updateProfile = CatchAsyncError(async (req,res,next)=>{

    const newUserData={
        name:req.body.name,
        email:req.body.email
    }

    // we will add cloudinary later

    const user = await User.findByIdAndUpdate(req.user.id,newUserData,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true
    })
})

module.exports.isLoggedIn = CatchAsyncError(async (req,res,next)=>{
    if(!req.user){
        next(new ErrorHandler("user not logged in",404))
    }

    res.status(200).json({
        success:true,
        message:"user is already logged in",
        user:req.user
    })
})