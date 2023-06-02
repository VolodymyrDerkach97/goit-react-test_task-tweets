import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsersApi, loadMoreApi } from "service/usersApi";
import { toast } from "react-toastify";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkApi) => {
    try {
      const res = await toast.promise(fetchUsersApi(), {
        pending: "Loading...",
        success: "Tweets loaded 👌",
        error: `Error🤯`,
      });
      console.log(res);
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loadMoreUsers = createAsyncThunk(
  "users/fetchLoadMore",
  async (page, thunkApi) => {
    try {
      const res = await toast.promise(loadMoreApi(page), {
        pending: "Loading...",
        success: "Tweets loaded 👌",
        error: `Error🤯`,
      });
      console.log(res);
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
// export const togleFollowing = createAsyncThunk(
//   "users/togleFollowing",
//   async (id, thunkApi) => {
//     const state = thunkApi.getState();
//     console.log("createAsyncThunk", state);
//     console.log("id", id);
//     const res = state.tweets.items.filte((item) => item.id === id);
//     console.log("res", res);
//   }
// );
