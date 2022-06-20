const CatchAsyncError = require("../middlewares/CatchAsyncError");
const express = require("express");
const app = express();
const path = require("path")
const fs = require("fs");


module.exports.stream = (req,res)=>{
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Requires Range header");
    }
    console.log(__dirname)
    const videoPath =path.normalize(req.video.path);
    console.log(videoPath)
    const videoSize = fs.statSync(videoPath).size;
    console.log(videoSize)
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mkv",
    };
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, { start, end });
    videoStream.pipe(res);
}