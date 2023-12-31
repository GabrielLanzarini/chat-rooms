import { useNavigate } from "react-router-dom"

export default function RoomCard({ roomName, roomId, online }) {
    const navigate = useNavigate()

    const handleButton = () => {
        if (online === 10) return
        navigate(`/chatRoom/${roomId}`)
    }

    return (
        <div className="w-[300px] gap-4 p-5 rounded-md bg-slate-800 flex items-center justify-center flex-col">
            <h1 className="text-white text-4xl font-bold">{roomName}</h1>
            <p className="text-white flex items-center gap-2">
                {online}/10 online
                <i className="bg-green-400 w-[8px] h-[8px] rounded-full drop-shadow" />
            </p>
            <button
                onClick={handleButton}
                className={`${
                    online >= 10 && "hover:bg-stone-500 focus:bg-stone-500 bg-stone-500"
                } hover:bg-teal-400 focus:bg-teal-400 bg-teal-500 transition-all duration-100 w-[80%] py-2 rounded-md text-white font-medium`}
            >
                {online >= 10 ? "Full" : "Enter"}
            </button>
        </div>
    )
}
