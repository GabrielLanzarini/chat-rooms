import { useEffect, useState } from "react"
import RoomCard from "./components/RoomCard"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { io } from "socket.io-client"
import config from "./config.json"

const socket = io(`http://${config.API_IP}:5000`)

export default function Rooms() {
    const [roomsRender, setRoomRender] = useState([])
    const [serverData, setServerData] = useState([])
    const navigate = useNavigate()
    const username = useSelector((state) => state.username.value)

    const getRooms = async () => {
        const { data } = await axios.get(`http://${config.API_IP}:5000/rooms`)
        setServerData(data)
    }

    const handleRenderRooms = async () => {
        const arr = []
        serverData.map((a, i) => {
            arr.push([<RoomCard key={i}  online={a.online} roomId={a.id} roomName={a.name} />])
        })
        setRoomRender(arr)
    }

    useEffect(() => {
        getRooms()
        socket.on("rooms", (rooms) => {
            console.log(rooms)
            setServerData(rooms)
        })
    }, [])

    useEffect(() => {
        handleRenderRooms()
    }, [serverData])

    if (!username) return navigate("/")

    return (
        <div className="flex  items-center justify-center  md:gap-5 lg:py-10 md:py-10  w-screen md:h-fit h-screen flex-col gap-3 bg-slate-950">
            <h1 className="text-white text-4xl font-bold">Available Rooms</h1>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-3 gap-4">{roomsRender}</div>
        </div>
    )
}
