import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setUser(state, action) {
      state.isAuth = action.payload;
    },
    signOut(state) {
      state.isAuth = false;
      state.token = null;
    },
  },
});

export const login = createAction("auth/login");
export const register = createAction("auth/register");

export default authSlice.reducer;
export const { setToken, setUser, signOut } = authSlice.actions;