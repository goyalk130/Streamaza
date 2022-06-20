const ErrorHandler = require("../utils/errorHandler")

module.exports = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server error";
    

    // wrong monogodb id error

    if(err.name === "CastError"){
        const message =     `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message,404);
    }

    // mongo duplicate key error
    if (err.code === 11000){
        const messsage = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message,400);
    }

    // Json web token error
    if(err.name === "JsonWebTokenError"){
        const messsage = `Json web token is invalid, try again`;
        err = new ErrorHandler(message,400);
    }

    // JWT expire error
    if(err.name === "TokenExpiredError"){
        const messsage = `Json web token is Expired, try again`;
        err = new ErrorHandler(message,400);
    }

    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}