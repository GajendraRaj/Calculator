import React from "react";
import { shallow } from "enzyme";
import Calculator from "../../component/calculator";
import Display from "../../component/calculator/display";
import Keypad from "../../component/calculator/keypad";

describe("Calculator", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Calculator />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Display Component", () => {
    expect(wrapper.containsMatchingElement(<Display />)).toEqual(true);
  });

  it("should render the keypad Component", () => {
    expect(wrapper.containsMatchingElement(<Keypad />)).toEqual(true);
  });
});
