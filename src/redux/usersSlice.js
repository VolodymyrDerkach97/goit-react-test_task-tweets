import { createSlice } from "@reduxjs/toolkit";
import { changeCountFollowers, fetchUsers, loadMoreUsers } from "./operations";
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
        state.isLoading = false;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(loadMoreUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(changeCountFollowers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(changeCountFollowers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.map((user) => {
          if (user.id === action.payload.id) {
            return (user = action.payload);
          }
          return user;
        });
      })
      .addCase(changeCountFollowers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { addFollowing, deleteFollowing } = usersSlice.actions;
export default usersSlice.reducer;
