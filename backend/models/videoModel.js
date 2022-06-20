const mongoose = require("mongoose")

const videoSchema = new mongoose.Schema({   
    name:{
        type:String,
        required:[true,"Must enter name of movie"],
        unique:true,
    },
    genre:[{
        type:String,
        required:[true,"must enter genre"],
    }],
    path:{
        type:String,
        required:[true,"path is required"],
        unique:true,
    },
    code:{
        type:String,
        required:[true,"Must enter movie code"],
        unique:true,
    },
    thumbnail:{
        type:String,
        
    }
})

videoSchema.pre("save",function(){
    this.path = "D:/New folder/" + this.path ;
console.log(this.path) })

module.exports = mongoose.model("Video",videoSchema)