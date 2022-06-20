const express = require("express")
const { registeruser, login, logout, getUserDetails, updateProfile, isLoggedIn } = require("../controllers/userController")
const { isAuthenticatedUser } = require("../middlewares/auth")

const router = express.Router()

router.route("/register").post(registeruser)

router.route("/login").post(login)

router.route("/logout").get(logout)

router.route("/logged").get(isAuthenticatedUser,isLoggedIn)

router.route("/me").get(isAuthenticatedUser,getUserDetails)

router.route("/me/update").post(isAuthenticatedUser,updateProfile)



module.exports = router