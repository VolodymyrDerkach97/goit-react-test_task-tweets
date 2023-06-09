import { createSlice } from "@reduxjs/toolkit";
import { changeCountFollowers, fetchUsers } from "../operations";
const initialState = {
  items: [],
  isFollowing: [],
  isLoading: false,
};
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addFollowing(state, action) {
      state.isFollowing.push(action.payload);
    },
    deleteFollowing(state, action) {
      const index = state.isFollowing.findIndex(
        (user) => user.id === action.payload
      );
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
        const newItems = action.payload.filter(
          (item) =>
            !state.items.some((existingItem) => existingItem.id === item.id)
        );
        state.items.push(...newItems);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
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
      });
  },
});
export const { addFollowing, deleteFollowing, clearUsersState } =
  usersSlice.actions;
export default usersSlice.reducer;
