import { createSelector } from "reselect";
import _ from "lodash";

const users = (store) => store.reducer.users;
const auth = (store) => store.reducer.auth;
const beer = (store) => store.reducer.beer;
const weather = (store) => store.reducer.weather;
const meet = (store) => store.reducer.meet;
const authError = (store) => store.reducer.authError;

export const getUsers = createSelector(users, (users) => users);
export const getAuth = createSelector(auth, (auth) => auth);
export const getWeather = createSelector(weather, (weather) => weather);
export const getBeer = createSelector(beer, (beer) => beer);
export const getMeet = createSelector(meet, (meet) => meet);

export const getAuthError = createSelector(authError, (authError) => authError);
