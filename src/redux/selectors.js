import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

export const selectUsers = (state) => state.tweets.items;

export const selectIsLoading = (state) => state.tweets.isLoading;

export const selectIsFollowing = (state) => state.tweets.isFollowing;

export const selectError = (state) => state.tweets.error;

export const selectStatusFilter = (state) => state.filters.status;

export const selectVisibleTweets = createSelector(
  [selectUsers, selectStatusFilter, selectIsFollowing],
  (users, statusFilter, isFollowing) => {
    switch (statusFilter) {
      case statusFilters.follow:
        return users.filter((user) => !isFollowing.includes(user.id));
      case statusFilters.following:
        return users.filter((user) => isFollowing.includes(user.id));
      default:
        return users;
    }
  }
);
