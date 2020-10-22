import CONST from "../types";

const defaultState = {
  users: [
    {
      name: "Sebastian",
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
  meet: [
    {
      id: 0,
      place: "San Telmo",
      date: "20/07/1993",
      time: "9:00",
      guest: "150",
      guestList: [
        { name: "Lucas" },
        { name: "Juan" },
        { name: "Pedro" },
        { name: "Alan" },
      ],
    },
    {
      id: 1,
      place: "San Telmo",
      date: "20/07/1993",
      time: "9:00",
      guest: "150",
      guestList: [
        { name: "Lucas" },
        { name: "Juan" },
        { name: "Pedro" },
        { name: "Alan" },
      ],
    },
    {
      id: 2,
      place: "San Telmo",
      date: "20/07/1993",
      time: "9:00",
      guest: "150",
      guestList: [
        { name: "Lucas" },
        { name: "Juan" },
        { name: "Pedro" },
        { name: "Alan" },
      ],
    },
  ],
  auth: {},
  authError: false,
  weather: null,
  beer: null,
};

export function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case CONST.AUTH:
      return {
        ...state,
        auth: payload,
      };
    case CONST.AUTH_ERROR:
      return {
        ...state,
        authError: payload,
      };

    case CONST.LOGIN_OUT:
      return {
        ...state,
        auth: {},
      };
    case CONST.WEATHER.SET:
      return {
        ...state,
        weather: payload,
      };
    case CONST.BEER.SET:
      return {
        ...state,
        beer: payload,
      };
    case CONST.MEET.UPDATE:
      return {
        ...state,
        meet: payload,
      };

    default:
      return state;
  }
}
