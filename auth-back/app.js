import 'dotenv/config'

import express from "express"
import cors from "cors"

const app = express()

const port = process.env.PORT || 5000

app.use(cors())

app.get("/",(req,res)=>{
    res.send("holi")
})


app.listen(port,()=>{
    console.log("server esta funcionando en el puerto " + port)
})
