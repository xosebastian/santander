import CONST from "../../constants";

const defaultState = {
  users: [
    {
      username: "user",
      password: "user",
      role: "user",
    },
    {
      username: "admin",
      password: "admin",
      role: "admin",
    },
  ],
  auth: {},
  authError: false,
};

export function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case CONST.AUTH:
      debugger;
      return {
        ...state,
        auth: payload,
      };
    case CONST.AUTH_ERROR:
      debugger;
      return {
        ...state,
        authError: payload,
      };
    default:
      return state;
  }
}
