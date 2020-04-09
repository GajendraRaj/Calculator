import React from "react";
import { shallow } from "enzyme";
import Key from "../../../../component/calculator/keypad/Key";

describe("Key component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Key keyAction={jest.fn()} keyType={""} keyValue={""} />);
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
