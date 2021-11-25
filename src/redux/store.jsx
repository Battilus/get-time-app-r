import {configureStore} from "@reduxjs/toolkit";
import {clocksReducer} from "./clocks-reducer";


const store = configureStore({
    reducer: {
        clocks: clocksReducer
    }
})

export default store