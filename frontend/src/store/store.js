import { configureStore } from "@reduxjs/toolkit"
import usernameSlicer from "../slicer/usernameSlicer"

export default configureStore({
    reducer: {
        username: usernameSlicer,
    },
})
