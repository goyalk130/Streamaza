const express = require("express");
const { createNewVideo, getAllVideos, getVideoDetails, playVideo } = require("../controllers/videoController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const router = express.Router();

router.route("/video/new").post(isAuthenticatedUser,authorizeRoles("admin"),createNewVideo)

router.route("/video/all").get(getAllVideos)

router.route("/video/:id").get(getVideoDetails)

router.route("/video/play/:id").get(playVideo)

module.exports =router