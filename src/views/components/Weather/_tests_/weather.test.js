import React from "react";
import { shallow } from "enzyme";

import Weather from "../index";

describe("Weather", () => {
  test("should render", () => {
    const wrapper = shallow(<Weather />);

    expect(wrapper.exists()).toBeTruthy();
  });
  
});
