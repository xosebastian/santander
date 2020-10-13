/* eslint-disable */
import { call, put, select } from "redux-saga/effects";
import { push } from 'react-router-redux';
import { getUsers } from "./selector";
import _ from "lodash";

import { setAuthAction } from "./actions";
//import { toggleSpinner } from "../ui/action";

export function* verifyUserSaga({ payload }) {

  debugger;
  
  yield put(push('/'));

 /* const users = yield select(getUsers);
  const isLogin = _.find(
    users,
    (o) => o.username == payload.username && o.password == payload.password
  );


  if(!_.isEmpty(isLogin)){
    debugger;
    //yield put(setAuthAction(!_.isEmpty(isLogin)));
    yield put(push('/'));
  }

*/
  /*   console.log(users);
  console.log(!_.isEmpty(isLogin));
 */
  //const isLogin = yield call(verifyUserService(payload));

}
