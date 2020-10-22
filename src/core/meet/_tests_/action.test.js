import CONST from "../../types";
import {
  LoginAction,
  getWeatherAction,
  getBeerAction,
  getMeetAction,
} from "../actions";

const payload = "payload";

describe("Meet Actions", () => {
  test("LoginAction", () => {
    const result = LoginAction(payload);
    expect(result).toEqual({
      payload,
      type: CONST.LOGIN,
    });
  });

  test("getWeatherAction", () => {
    const result = getWeatherAction(payload);
    expect(result).toEqual({
      payload,
      type: CONST.WEATHER.GET,
    });
  });

  test("getBeerAction", () => {
    const result = getBeerAction(payload);
    expect(result).toEqual({
      payload,
      type: CONST.BEER.GET,
    });
  });

  test("getMeetAction", () => {
    const result = getMeetAction(payload);
    expect(result).toEqual({
      payload,
      type: CONST.MEET.GET,
    });
  });
});
