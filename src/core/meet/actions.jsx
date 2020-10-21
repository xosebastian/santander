/* eslint-disable */
import CONST from "../types";

export const LoginAction = (payload) => ({
  payload,
  type: CONST.LOGIN,
});

export const setAuthAction = (payload) => ({
  payload,
  type: CONST.AUTH,
});

export const setAuthErrorAction = (payload) => ({
  payload,
  type: CONST.AUTH_ERROR,
});

/* Weather */

export const getWeatherAction = (payload) => ({
  payload,
  type: CONST.WEATHER.GET,
});

export const setWeatherAction = (payload) => ({
  payload,
  type: CONST.WEATHER.SET,
});

/* Guest */

export const getBeerAction = (payload) => ({
  payload,
  type: CONST.BEER.GET,
});

export const setBeerAction = (payload) => ({
  payload,
  type: CONST.BEER.SET,
});



/* Meet */

export const getMeetAction = (payload) => ({
  payload,
  type: CONST.MEET.GET,
});

export const updateMeetAction = (payload) => ({
  payload,
  type: CONST.MEET.UPDATE,
});


export const setMeetAction = (payload) => ({
  payload,
  type: CONST.MEET.SET,
});
