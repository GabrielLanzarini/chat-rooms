import { useEffect, useState } from "react"

export default function ChatRoom() {
    const [messages, setMessages] = useState([])

    const renderMessage = () => {
        const arr = []
        for (let i = 0; i < 50; i++) {
            arr.push([
                <div className="animate__animated  animate__flipInY flex items-end gap-2 w-full ">
                    <div className="bg-slate-700 px-5 w-fit max-w-[92%] py-2 rounded-lg">
                        <h1 className="font-bold text-teal-400">NOMEUSUARIO</h1>
                        <p className="text-white break-words">
                            adaadawdawdawdMensagemMensagemMensagaaaaaaawdawdawdawdawdawdawdawdawdawdawdwdawdwdawdwdawdwdawdwdawdwdawdwdawdwdawd
                        </p>
                    </div>
                    <p className="text-white text-sm">10:50</p>
                </div>
            ])
        }
        setMessages(arr)
    }

    useEffect(() => {
        renderMessage()
    }, [])

    return (
        <div className="flex items-center justify-center w-screen h-screen flex-col gap-3 bg-slate-950">
            <div className=" w-[60%] h-[90%] overflow-y-auto overflow-x-hidden gap-2 flex flex-col">{messages}</div>
            <div className="w-[60%] flex items-center justify-center relative">
                <input placeholder="Type your message here" className="bg-slate-900 placeholder:text-slate-600 w-full text-white pl-7 pr-11 py-3 rounded-lg" type="text" />
                <svg className="absolute w-8 right-[10px] fill-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M3 13.0001H9V11.0001H3V1.8457C3 1.56956 3.22386 1.3457 3.5 1.3457C3.58425 1.3457 3.66714 1.36699 3.74096 1.4076L22.2034 11.562C22.4454 11.695 22.5337 11.9991 22.4006 12.241C22.3549 12.3241 22.2865 12.3925 22.2034 12.4382L3.74096 22.5925C3.499 22.7256 3.19497 22.6374 3.06189 22.3954C3.02129 22.3216 3 22.2387 3 22.1544V13.0001Z"></path>
                </svg>
            </div>
        </div>
    )
}
