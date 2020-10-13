import { all, takeEvery } from "redux-saga/effects";
import CONST from "../constants";
import { verifyUserSaga } from "./meet/saga";

function* rootSagas() {
  yield all([
    takeEvery(CONST.LOGIN , verifyUserSaga),
  ]);
}

export default rootSagas;
