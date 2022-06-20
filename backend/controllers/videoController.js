const Video = require("../models/videoModel");
const ErrorHandler = require("../utils/errorHandler");
const CatchAsyncError = require("../middlewares/CatchAsyncError");
const ApiFeatures = require("../utils/apifeatures");
const { stream } = require("../utils/stream");

module.exports.getAllVideos = CatchAsyncError(async (req,res,next)=>{

console.log(req.query)
    const apifeatures = new ApiFeatures(Video.find(),req.query).search()
    const videos = await apifeatures.query;

    // console.log(videos)

    res.status(200).json({
        query:req.query,
        suceess:true,
        videos,
        count:videos.length
    })
})


module.exports.getVideoDetails = CatchAsyncError(async (req,res,next)=>{

    const isId = req.params.id ?  true : false;

    if(isId){var videoDetails = await Video.findById(req.params.id)}

    if(!videoDetails){
        next(new ErrorHandler("Id not found",404))
    }

    res.status(200).json({
        success:true,
        videoDetails
    })
})

module.exports.createNewVideo = CatchAsyncError(async (req,res,next)=>{

    let {name,genre,code,path,thumbnail} = req.body;
    const video = await Video.create({
        name,genre,code,path,thumbnail
    })

    if(!video){
        next(new ErrorHandler("Invalid values",404))
    }

    res.status(200).json({
        success:true,
        video
    })
})

module.exports.playVideo = CatchAsyncError(async (req,res,next)=>{

    const id = req.params.id ? req.params.id : false;

    if(!id){
        next(new ErrorHandler("Id not found",404))
    }

    const video = await Video.findById(id);

    if(video){
        req.video = video;
        stream(req,res)
    }
})