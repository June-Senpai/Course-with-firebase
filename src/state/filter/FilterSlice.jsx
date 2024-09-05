import { createSlice } from "@reduxjs/toolkit";

const filter = createSlice({
  name: "filter",
  initialState: {
    name: "",
    instructor: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setInstructor: (state, action) => {
      state.instructor = action.payload;
    },
  },
});

export const { setName, setInstructor } = filter.actions;
export default filter.reducer;
