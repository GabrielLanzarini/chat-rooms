import { createSlice } from "@reduxjs/toolkit"

export const usernameSlicer = createSlice({
    name: "setUsername",
    initialState: {
        value: localStorage.getItem("username"),
    },
    reducers: {
        create: (state, action) => {
            state.value = action.payload
            localStorage.setItem("username", action.payload)
        },
    },
})

export const { create } = usernameSlicer.actions

export default usernameSlicer.reducer
