import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    //It defines the default values for the state when your application first loads or when the store is reset
    isSidebarEnabled: true,
    isUserMenuEnabled: false,
  },
  reducers: {
    //Reducers are functions that specify how the state changes in response to specific actions.
    toggleSidebar: (state) => {
      state.isSidebarEnabled = !state.isSidebarEnabled;
    },

    toggleUserMenu: (state) => {
      state.isUserMenuEnabled = !state.isUserMenuEnabled;
    },
  },
});

export default appSlice.reducer;
export const { toggleSidebar, toggleUserMenu } = appSlice.actions;
