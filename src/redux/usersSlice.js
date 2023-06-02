import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, loadMoreUsers } from "./operations";

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
      console.log("state", state.isFollowing);
      state.isFollowing.map((item) => {
        if (item.id === action.payload) {
          const index = state.findIndex((task) => task.id === action.payload);
          return state.splice(index, 1);
        } else {
          return state.isFollowing.push(action.payload);
        }
      });
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
export const { addFollowing } = usersSlice.actions;
