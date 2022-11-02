import { configureStore } from "@reduxjs/toolkit";
import groupReducer from "../features/group/groupSlice";

export const store = configureStore({
  reducer: { groups: groupReducer },
});
