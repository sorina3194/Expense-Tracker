import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: { user: null, loading: true },
  reducers: {
    login: (state, action) => {
      state.user = JSON.parse(JSON.stringify(action.payload));
      state.loading = false;
    },
    logout: (state, action) => {
      state.user = null;
      state.loading = false;
    },
  },
});

export const selectUserId = (state) => state.users.user?.uid;
export const selectUserEmail = (state) => state.users.user?.email;
export const selectIsLoading = (state) => state.users.loading;
export const { login, logout } = usersSlice.actions;
export default usersSlice.reducer;
