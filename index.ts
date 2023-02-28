const express = require("express")
import { router } from "./routes/appRoute";

const app = express()

app.use("/", router)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})