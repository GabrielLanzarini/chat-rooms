import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { create } from "./slicer/usernameSlicer"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()
    const username = useSelector((state) => state.username.value)

    const dispatch = useDispatch()

    const handleInputValue = (e) => setInputValue(e.target.value)
    const handleButton = () => {
        if (inputValue.length < 4) return
        dispatch(create(inputValue))
        navigate("/rooms")
    }

    return (
        <div className="flex items-center justify-center w-screen h-screen flex-col gap-3 bg-slate-950">
            <h1 className="text-3xl font-bold text-white">Insert your name</h1>
            <input value={inputValue} onChange={handleInputValue} placeholder="Username" type="text" className="bg-slate-900 text-lg text-white py-2 px-2 w-[350px] rounded-md" />
            <button onClick={handleButton} className="hover:bg-teal-400 focus:bg-teal-400 transition-all duration-100 bg-teal-500 py-2 w-[350px] rounded-md text-white font-medium">
                Login
            </button>
        </div>
    )
}
