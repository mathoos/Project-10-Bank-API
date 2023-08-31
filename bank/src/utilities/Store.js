import { configureStore } from "@reduxjs/toolkit"

import userReducer from "./Slice"
import serverAPIReducer from "./Server"

export const store = configureStore({
    reducer: {
        user: userReducer,
        serverAPI: serverAPIReducer,
    },
})