export const selectUsers = (state) => state.tweets.items;

export const selectIsLoading = (state) => state.tweets.isLoading;

export const selectError = (state) => state.tweets.error;

export const selectStatusFilter = (state) => state.filters.status;
