import { createAsyncThunk } from "@reduxjs/toolkit";
import { changeFollowersApi, fetchUsersApi } from "service/usersApi";
import { toast } from "react-toastify";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (page, thunkApi) => {
    try {
      const res = await toast.promise(fetchUsersApi(page), {
        pending: "Loading...",
        success: "Tweets loaded 👌",
        error: "Error, try again 🤯",
      });

      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const changeCountFollowers = createAsyncThunk(
  "users/changeCountFollowers",
  async (data, thunkApi) => {
    try {
      const res = await toast.promise(changeFollowersApi(data), {
        pending: "Loading...",
        success: "Success 👌",
        error: "Error, try again 🤯",
      });
      return res.data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
