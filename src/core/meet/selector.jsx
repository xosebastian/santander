/* eslint-disable no-shadow */
import { createSelector } from "reselect";

const users = store => store.reducer.users;
const beer = store => store.reducer.beer;
const weather = store => store.reducer.weather;
const meet = store => store.reducer.meet;
const authError = store => store.reducer.authError;

export const getUsers = createSelector(users, (users) => users);
export const getWeather = createSelector(weather, (weather) => weather);
export const getBeer = createSelector(beer, (beer) => beer);
export const getMeet = createSelector(meet, (meet) => meet);
export const getAuthError = createSelector(authError, (authError) => authError);
