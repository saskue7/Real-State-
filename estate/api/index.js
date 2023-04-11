const express = require('express')
const app = express()
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const dotenv = require('dotenv')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const dataRoute = require('./routes/data')

dotenv.config()

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, {}, () => {
 console.log("Database is connected")
})

// middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/data", dataRoute)
app.get("/", (req, res) => {
 res.send("welcome")
})

port = 8000


app.listen(port, () => {
 console.log("Server is listening at", port)
})