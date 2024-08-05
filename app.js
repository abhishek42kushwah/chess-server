const express = require("express")
const socket = require("socket.io")
const path = require("path")
const http = require("http")
const {Chess} = require("chess.js")
const app = express()

const server = http.createServer(app)
const io = socket(server)

const chess = new Chess()

let Player = {}
let currentPlayer = "W"

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))


const PORT = 5000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`
)})

app.get("/",(req,res)=>{
    res.send("index");
})