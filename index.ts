const express = require("express")
const dotenv = require("dotenv").config()
import { router } from "./routes/appRoute"


const app = express()

app.use("/", router)

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
