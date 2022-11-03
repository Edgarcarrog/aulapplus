import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myGroups: null,
  currentGroup: null,
};

export const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    setGroups: (state, action) => {
      state.myGroups = action.payload;
    },
    setCurrentGroup: (state, action) => {
      state.currentGroup = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentGroup, setGroups } = teacherSlice.actions;

export default teacherSlice.reducer;
