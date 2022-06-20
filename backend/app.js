const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const errorMiddleware = require("./middlewares/error")
const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
    
}))

const user = require("./routes/userRoute")
const video = require("./routes/videoRoute")

app.use("/api/v1",user)
app.use("/api/v1",video)

app.use(errorMiddleware)
module.exports = app;