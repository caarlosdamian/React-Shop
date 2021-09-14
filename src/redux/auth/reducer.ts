import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";



const initialState: {
  token: string;
  isAuth: boolean | null;
} = {
  token: "",
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action:PayloadAction<string>) {
      state.token = action.payload;
    },
    setUser(state, action:PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    signOut(state) {
      state.isAuth = false;
      state.token = '';
    },
  },
});

export const login = createAction<{ displayName:string,email: string; password: string }>("auth/login");
export const register = createAction<{ email: string; password: string }>("auth/register");
export default authSlice.reducer;
export const { setToken, setUser, signOut } = authSlice.actions;