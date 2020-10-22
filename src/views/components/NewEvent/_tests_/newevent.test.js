import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../../../core/store.config";

import NewEvent from "../index";

describe("NewEvent", () => {
  test("should render", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <NewEvent />
      </Provider>
    );

    //const wrapper = shallow(<Footer />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
