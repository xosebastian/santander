/* eslint-disable */
import { call, put, select } from "redux-saga/effects";
import { push } from "react-router-redux";
import { getUsers } from "./selector";
import _ from "lodash";

import { setAuthAction, setAuthErrorAction } from "./actions";
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
