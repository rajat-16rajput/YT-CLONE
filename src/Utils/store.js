import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appSlice";

const store = configureStore({
  reducer: {
    app: appslice, //slice
  },
});

export default store;
