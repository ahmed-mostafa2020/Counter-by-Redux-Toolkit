import { createSlice, createStore } from "@reduxjs/toolkit";

const initState = { value: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.value += action.increase;
    },
    decrease: (state, action) => {
      state.value -= action.decrease;
    },
  },
});

// const counterReducer = (state = initState, action) => {
//   ///logic
//   if (action.type === "increase") {
//     return { ...state, value: state.value + action.payload };
//   }

//   if (action.type === "decrease") {
//     return { ...state, value: state.value - action.payload };
//   }

//   if (action.type === "toggleCounter") {
//     return { ...state, showCounter: !state.showCounter };
//   }
//   return state;
// };

const store = createStore(counterSlice.reducer);

export default store;
