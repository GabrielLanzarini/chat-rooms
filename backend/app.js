const express = require("express")
const app = express()
const cors = require("cors")
var http = require("http").Server(app)
var io = require("socket.io")(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
})

app.use(
    cors({
        origin: "*",
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
    { id: 1, name: "Room 1", online: 0, messages: [] },
    { id: 2, name: "Room 2", online: 0, messages: [] },
    { id: 3, name: "Room 3", online: 0, messages: [] },
    { id: 4, name: "Room 4", online: 0, messages: [] },
]

app.use(express.json())

app.get("/messages/:roomid", async (req, res) => {
    const { roomid } = req.params
    const room = rooms.filter((e) => e.id == roomid)
    res.status(200).json(room[0])
})

app.get("/rooms", async (req, res) => {
    res.status(200).json(rooms)
})

app.post("/messages/:roomid", async (req, res) => {
    const { roomid } = req.params
    const { message, username } = req.body
    const time = formatTime()
    const room = rooms.filter((e) => e.id == roomid)
    room[0].messages.push([{ message: message, username: username, time: time }])
    io.emit("message", room[0].messages)
    res.status(200).json({ message: "Send" })
})

io.on("connection", (socket) => {
    console.log("a user is connected")

    socket.on("roomEnter", (roomId) => {
        const room = rooms.filter((e) => e.id === +roomId)
        room[0].online = room[0].online + 1 > 10 ? 10 : room[0].online + 1
        io.emit("rooms", rooms)
    })

    socket.on("roomExit", (roomId) => {
        const room = rooms.filter((e) => e.id == +roomId)
        room[0].online = room[0].online - 1 < 0 ? 0 : room[0].online - 1
        io.emit("rooms", rooms)
    })
})

http.listen(5000, () => {
    console.log("server is running on port")
})
