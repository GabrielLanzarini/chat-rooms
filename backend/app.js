const express = require("express")
const app = express()
const cors = require("cors")
var http = require("http").Server(app)
var io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
})

app.use(
    cors({
        origin: "http://localhost:3000",
    })
)

const formatTime = () => {
    const data = new Date()
    let minutes = data.getMinutes()
    let hours = data.getHours()
    if (minutes < 10) minutes = `${0}${minutes}`
    if (hours < 10) hours = `${0}${hours}`
    return `${hours}:${minutes}`
}

const rooms = [
    { id: 1, name: "Room1", online: 0, messages: [] },
    { id: 2, name: "Room2", online: 0, messages: [] },
    { id: 3, name: "Room3", online: 0, messages: [] },
    { id: 4, name: "Room4", online: 0, messages: [] },
]

app.use(express.json())

app.get("/messages/:roomid", async (req, res) => {
    const { roomid } = req.params
    const room = rooms.filter((e) => e.id == roomid)
    res.status(200).json([room])
})

app.get("/rooms", async (req, res) => {
    res.status(200).json(rooms)
})

app.post("/messages", async (req, res) => {
    const { message, username } = req.body
    const time = formatTime()
    messages.push({ message: message, username: username, time: time })
    console.log(message, username)
    io.emit("message", messages)
    res.status(200).json({ message: "Send" })
})

io.on("connection", (socket) => {
    console.log("a user is connected")

    socket.on("roomEnter", (roomId) => {
        const room = rooms.filter((e) => e.id === roomId)
        room[0].online += 1
    })

    socket.on("roomExit", (roomId) => {
        const room = rooms.filter((e) => e.id == roomId)
        room.online -= 1
    })
})

http.listen(5000, () => {
    console.log("server is running on port")
})
