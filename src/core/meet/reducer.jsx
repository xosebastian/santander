import CONST from "../types";

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
  meet : [
    {
      id: 0,
      place: "San Telmo",
      date : "20/07/1993",
      time : "9:00",
      guest : '150',
    },
    {
      id: 1,
      place: "San Telmo",
      date : "20/07/1993",
      time : "9:00",
      guest : '150',
    },
    {
      id: 2,
      place: "San Telmo",
      date : "20/07/1993",
      time : "9:00",
      guest : '150',
    },
  ],
  auth: {},
  authError: false,
  weather:null,
  beer:null,
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
    case CONST.WEATHER.SET:
      debugger;
      return {
        ...state,
        weather: payload,
      };
      case CONST.BEER.SET:
        debugger;
        return {
          ...state,
          beer: payload,
        };
      case CONST.MEET.UPDATE:
          debugger;
          return {
            ...state,
            meet: (payload),
          };
    default:
      return state;
  }
}
