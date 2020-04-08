import React from "react";
import { shallow } from "enzyme";
import Display from "../../../component/calculator/display";

describe("Display", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Display displayValue={""} />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("renders the value of displayValue", () => {
    wrapper.setProps({ displayValue: "0" });
    expect(wrapper.text()).toEqual("0");
  });
});
