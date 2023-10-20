import { configureStore } from "@reduxjs/toolkit";
import { DataReducer, SelectDataReducer } from "./changes/changes";

const store = configureStore({
  reducer: {
    DataReducer,
    SelectDataReducer,
  },
});

export default store;
