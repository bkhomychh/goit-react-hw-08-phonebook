export const selectUsername = state => state.auth.user.name;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
