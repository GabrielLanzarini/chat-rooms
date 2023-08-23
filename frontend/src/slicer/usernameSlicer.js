import { createSlice } from "@reduxjs/toolkit"

export const usernameSlicer = createSlice({
    name: "setUsername",
    initialState: {
        value: "",
    },
    reducers: {
        create: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { create } = usernameSlicer.actions

export default usernameSlicer.reducer
