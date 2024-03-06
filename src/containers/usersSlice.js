import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: { user: null },
  reducers: {
    login: (state, action) => {
      state.user = JSON.parse(JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const selectUserId = (state) => state.users.user?.uid;
export const { login, logout } = usersSlice.actions;
export default usersSlice.reducer;
