const app = require("./app")
const dotenv = require("dotenv")
const connectDatabase = require("./config/database")

dotenv.config({
    path:"backend/config/config.env"
})

connectDatabase()
app.get("/",(req,res)=>{
    res.json({
        data:"working"
    })
})


const server = app.listen(process.env.PORT || 4000,()=>{
    console.log(`server is running ${process.env.PORT_NUMBER} `)
})

