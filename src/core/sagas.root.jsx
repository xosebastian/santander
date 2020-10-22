import { all, takeEvery } from "redux-saga/effects";
import CONST from "./types";
import {
  verifyUserSaga,
  getWeatherSaga,
  getBeerSaga,
  setMeetSaga,
  setGuestSaga,
} from "./meet/saga";

function* rootSagas() {
  yield all([
    takeEvery(CONST.LOGIN, verifyUserSaga),
    takeEvery(CONST.WEATHER.GET, getWeatherSaga),
    takeEvery(CONST.BEER.GET, getBeerSaga),
    takeEvery(CONST.MEET.SET, setMeetSaga),
    takeEvery(CONST.GUEST.SET, setGuestSaga),
  ]);
}

export default rootSagas;
