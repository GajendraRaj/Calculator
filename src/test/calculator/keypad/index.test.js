import React from "react";
import { shallow } from "enzyme";
import Keypad from "../../../component/calculator/keypad";

describe("Keypad", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Keypad
        callOperator={jest.fn()}
        numbers={[]}
        operators={[]}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
  });

  it("should render 2 div's", () => {
    expect(wrapper.find("div").length).toEqual(2);
  });

  it("renders the value of numbers", () => {
    wrapper.setProps({ numbers: ["0", "1", "2"] });
    expect(wrapper.find(".numbers-container").text()).toEqual("012");
  });
});
