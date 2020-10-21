/* eslint-disable */
import { call, put, select } from "redux-saga/effects";
import { push } from "react-router-redux";
import { getUsers, getWeather, getMeet } from "./selector";
import _ from "lodash";
import moment from "moment";
import {
  setAuthAction,
  setWeatherAction,
  setBeerAction,
  setAuthErrorAction,
  updateMeetAction,
} from "./actions";
import { getWeatherService } from "./services";
//import { toggleSpinner } from "../ui/action";

export function* verifyUserSaga({ payload }) {
  const users = yield select(getUsers);
  const isLogin = _.find(
    users,
    (o) => o.username == payload.username && o.password == payload.password
  );

  if (!_.isEmpty(isLogin)) {
    yield put(setAuthAction(isLogin));
    yield put(push("/"));
  } else {
    yield put(setAuthErrorAction(true));
  }
}

export function* getWeatherSaga({ payload = moment().format("YYYY-MM-DD") }) {
  try {
    const { data } = yield call(getWeatherService);
    yield put(setWeatherAction(_.find(data, (o) => o.datetime == payload)));
  } catch (e) {}
}

export function* getBeerSaga({ payload }) {
  const weather = yield select(getWeather);

  let box = 0;

  if (weather.max_temp > 24) {
    box = (payload * 2) / 6;
  } else if (weather.max_temp < 20) {
    box = (payload * 0.75) / 6;
  } else {
    box = payload / 6;
  }

  yield put(setBeerAction(Math.ceil(box)));
}

export function* setMeetSaga({ payload }) {
  let meet = yield select(getMeet);
  payload.id = meet.length;
  var meets = [...meet, payload];
  yield put(updateMeetAction(meets));
  yield put(push("/"));
}
