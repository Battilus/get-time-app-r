import {createSlice} from "@reduxjs/toolkit";


const clocksSlice = createSlice({
    name: 'clocks',
    initialState: {
        timezones: []
    },
    reducers: {
        addClock(state, action) {
            state.timezones.push(action.payload.selectedTZ)
        },
        deleteClock(state, action) {
            state.timezones = state.timezones.filter((item) => item.id !== action.payload.timezoneId)
        }
    }
})

export const { addClock, deleteClock } = clocksSlice.actions
export const clocksReducer = clocksSlice.reducer