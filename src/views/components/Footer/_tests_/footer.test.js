import React from "react";
import { shallow } from "enzyme";

import Footer from "../index";

describe("Footer", () => {
  test("should render", () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
