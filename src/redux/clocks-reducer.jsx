import {createSlice} from "@reduxjs/toolkit";
import {loadLocalState, saveLocalState} from "../features/localStoreEngn";

const localSt = loadLocalState('timezones')
const initialState = {
    timezones: (localSt)? localSt : []
}

const clocksSlice = createSlice({
    name: 'clocks',
    initialState: initialState,
    reducers: {
        addClock(state, action) {
            state.timezones.push(action.payload.selectedTZ)
            saveLocalState(state.timezones, 'timezones')
        },
        deleteClock(state, action) {
            state.timezones = state.timezones.filter((item) => item.id !== action.payload.timezoneId)
            saveLocalState(state.timezones, 'timezones')
        }
    }
})

export const { addClock, deleteClock } = clocksSlice.actions
export const clocksReducer = clocksSlice.reducer