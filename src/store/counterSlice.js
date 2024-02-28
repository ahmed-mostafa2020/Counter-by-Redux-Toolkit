import { createSlice } from "@reduxjs/toolkit";
import { toggleAuth } from "./authSlice";

const initState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state, action) => {
      state.value -= action.payload;
    },
  },

  // Add lister in this reducer on another reducer

  extraReducers: (builder) => {
    builder.addCase(toggleAuth, (state) => {
      state.value = 0;
    });
  },
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;
