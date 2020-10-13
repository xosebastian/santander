/* eslint-disable */
import CONST from "../../constants/index";

export const LoginAction = (payload) => ({
  payload,
  type: CONST.LOGIN,
});

export const setAuthAction = (payload) => ({
  payload,
  type: CONST.AUTH,
});
