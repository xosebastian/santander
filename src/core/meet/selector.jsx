/* eslint-disable no-shadow */
import { createSelector } from "reselect";

const users = store => store.reducer.users;

export const getUsers = createSelector(users, (users) => users);
