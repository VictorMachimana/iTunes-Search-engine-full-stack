import React from "react";
import Music from "../components/music";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<Music />).toJSON();

  expect(tree).toMatchSnapshot();
});
