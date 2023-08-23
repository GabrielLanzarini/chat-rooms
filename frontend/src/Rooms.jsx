import { useEffect, useState } from "react"
import RoomCard from "./components/RoomCard"
import { useSelector } from "react-redux"

export default function Rooms() {
    const [roomsRender, setRoomRender] = useState([])
    const username = useSelector((state) => state.username.value)

    const handleRenderRooms = () => {
        const arr = []
        for (let i = 0; i < 5; i++) {
            arr.push([<RoomCard online={0} roomId={i} roomName={`Room${i}`} />])
        }
        setRoomRender(arr)
    }

    useEffect(() => {
        handleRenderRooms()
    }, [])

    return (
        <div className="flex items-center justify-center w-screen h-screen flex-col gap-3 bg-slate-950">
            <h1 className="text-white text-4xl font-bold">Available Rooms</h1>
            <div className="grid grid-cols-3 gap-4">{roomsRender}</div>
        </div>
    )
}
