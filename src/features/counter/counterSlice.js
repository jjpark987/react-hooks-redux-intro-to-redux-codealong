import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'counter',
    initialState: { items: [] },
    reducers: {
        increment: state => {
            console.log("Current state.items length %s", state.items.length);
            console.log("Updating state.items length to %s", state.items.length + 1);
            state.items.push(state.items.length + 1);
        }
    }
});

export const { increment } = slice.actions;
export default slice.reducer
