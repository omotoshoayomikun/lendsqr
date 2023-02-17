import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        bar: false
    },
    reducers: {
        handleSlide: (state, action) => {
            state.bar = action.payload
        }
    }
})

export default SidebarSlice.reducer
export const { handleSlide } = SidebarSlice.actions