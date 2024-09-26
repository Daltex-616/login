import 'dotenv/config'
import signup from './routes/signup.js';

import express from "express"
import cors from "cors"

const app = express()

const port = process.env.PORT || 5000

app.use(cors())

app.use(express.json)

app.use("/api/signup", signup);
// app.use("/api/login", require("./routes/login"))
// app.use("/api/todo", require("./routes/todo"))
// app.use("/api/user", require("./routes/user"))
// app.use("/api/refresh-token", require("./routes/refreshToken"))
// app.use("/api/signout", require("./routes/signout"))

app.get("/",(req,res)=>{
    res.send("holi")
})


app.listen(port,()=>{
    console.log("server esta funcionando en el puerto " + port)
})
