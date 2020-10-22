import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../../../core/store.config";

import Header from "../index";

describe("Header", () => {
  test("should render", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    //const wrapper = shallow(<Footer />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
