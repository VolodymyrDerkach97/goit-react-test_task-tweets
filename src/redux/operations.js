import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  changeFollowersApi,
  fetchUsersApi,
  loadMoreApi,
} from "service/usersApi";
import { toast } from "react-toastify";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkApi) => {
    try {
      const res = await toast.promise(fetchUsersApi(), {
        pending: "Loading...",
        success: "Tweets loaded 👌",
        error: `Error🤯`,
      });

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

      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const changeCountFollowers = createAsyncThunk(
  "users/changeCountFollowers",
  async (data, thunkApi) => {
    try {
      const res = await changeFollowersApi(data);
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
