import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    auth: true,
    company_id: 1,
  },
  reducers: {
    toggleAuth(state, action) {
      state.auth = action.payload;
    },
  },
});

export const { toggleAuth } = slice.actions;

export default slice.reducer;
