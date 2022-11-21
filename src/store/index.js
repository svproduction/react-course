import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import countReducer from "./reducers/countReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    count: countReducer,
  },
});

export default store;
