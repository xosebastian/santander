/* eslint-disable no-shadow */
import { createSelector } from "reselect";

const users = store => store.reducer.users;
const authError = store => store.reducer.authError;

export const getUsers = createSelector(users, (users) => users);
export const getAuthError = createSelector(authError, (authError) => authError);
