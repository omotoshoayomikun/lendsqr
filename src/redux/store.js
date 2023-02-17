import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./sidebarSlice";

export default configureStore({
    reducer: {
        sidebar: SidebarSlice
    }
})