import { createSlice } from "@reduxjs/toolkit";
import {
  changeCountFollowers,
  fetchUsers,
  incrementFollowers,
  loadMoreUsers,
} from "./operations";
const initialState = {
  items: [],
  isFollowing: [],
  isLoading: false,
  error: null,
};
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addFollowing(state, action) {
      state.isFollowing.push(action.payload);
    },
    deleteFollowing(state, action) {
      const index = state.isFollowing.findIndex((id) => id === action.payload);
      if (index !== -1) {
        state.isFollowing.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loadMoreUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadMoreUsers.fulfilled, (state, action) => {
        console.log("loadMoreUsers:", action.payload);
        state.isLoading = false;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(loadMoreUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { addFollowing, deleteFollowing } = usersSlice.actions;
export default usersSlice.reducer;
