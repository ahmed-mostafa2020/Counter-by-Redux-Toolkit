import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

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

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
