import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: { email: string } | null;
  email: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  email: localStorage.getItem("email"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string }>) => {
      (state.isAuthenticated = true),
        (state.user = action.payload),
        (state.email = action.payload.email);
      localStorage.setItem("email", action.payload.email);
    },
    logout: (state) => {
      (state.isAuthenticated = false),
        (state.user = null),
        (state.email = null);

      localStorage.removeItem("email");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
