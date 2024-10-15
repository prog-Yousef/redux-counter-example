import { createSlice } from "@reduxjs/toolkit";

const savedCounter = sessionStorage.getItem('counter');

const initialState = parseInt(savedCounter) || 0;

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            // Första parametern är nuvarande state och andra parametern är ett objekt som innehåller det vi vill spara till vårt state
            console.log("state är", state);
            console.log("action är", action);
            // Här finns vår logik för att uppdatera vårt state
            return state + action.payload; //uppdatera vårt state
        },
        // Här kan vi lägga till fler reducers för att uppdatera vårt state ex. decrement
        /*
        decrement: (state, action) => {
            return state - action.payload;
        },
        */
    },
});

export const { increment } = counterSlice.actions;
/* export const { decrement } = counterSlice.actions; */
export default counterSlice.reducer;