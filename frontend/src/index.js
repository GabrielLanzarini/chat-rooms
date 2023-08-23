import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import Login from "./Login"
import Rooms from "./Rooms"
import ChatRoom from "./ChatRoom"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/store"
import "animate.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/rooms",
        element: <Rooms />,
    },
    {
        path: "/chatRoom/:roomId",
        element: <ChatRoom />,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
