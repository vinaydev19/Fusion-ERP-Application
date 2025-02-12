import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    profile: null,
  },
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    getMyProfile: (state, action) => {
      console.log("Dispatched getMyProfile action:", action.payload);
      state.profile = action.payload;
    },
  },
});

export const { getUser, getMyProfile } = userSlice.actions;

export default userSlice.reducer;
