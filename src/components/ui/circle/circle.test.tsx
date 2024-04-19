import { Circle } from "./circle";
import { render, fireEvent, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { ElementStates } from "../../../types/element-states";
describe("Тестирование компонента Circle", () => {
  test("отрисовка элемента без буквы", () => {
    const circleElement = renderer.create(<Circle letter="" />).toJSON();
    expect(circleElement).toMatchSnapshot();
  });
  test("отрисовка элемента c буквой", () => {
    const circleElement = renderer.create(<Circle letter="A" />).toJSON();
    expect(circleElement).toMatchSnapshot();
  });
  test("отрисовка элемента c head", () => {
    const circleElement = renderer.create(<Circle head={"1"} />).toJSON();
    expect(circleElement).toMatchSnapshot();
  });
  test("отрисовка элемента c  react-элементом в head", () => {
    const circleElement = renderer
      .create(<Circle head={<Circle />} />)
      .toJSON();
    expect(circleElement).toMatchSnapshot();
  });
  test("отрисовка элемента c tail", () => {
    const circleElement = renderer.create(<Circle tail={"1"} />).toJSON();
    expect(circleElement).toMatchSnapshot();
  });
  test("отрисовка элемента c  react-элементом в tail", () => {
    const circleElement = renderer
      .create(<Circle tail={<Circle />} />)
      .toJSON();
    expect(circleElement).toMatchSnapshot();
  });
  test("отрисовка элемента c index", () => {
    const circleElement = renderer.create(<Circle index={1} />).toJSON();
    expect(circleElement).toMatchSnapshot();
  });
  test("отрисовка элемента с пропcом isSmall", () => {
    const circleElement = renderer.create(<Circle isSmall={true} />).toJSON();
    expect(circleElement).toMatchSnapshot();
  });
  test("отрисовка элемента в состоянии default", () => {
    const circleElement = renderer
      .create(<Circle state={ElementStates.Default} />)
      .toJSON();
    expect(circleElement).toMatchSnapshot();
  });
  test("отрисовка элемента в состоянии changing", () => {
    const circleElement = renderer
      .create(<Circle state={ElementStates.Changing} />)
      .toJSON();
    expect(circleElement).toMatchSnapshot();
  });
  test("отрисовка элемента в состоянии modified", () => {
    const circleElement = renderer
      .create(<Circle state={ElementStates.Modified} />)
      .toJSON();
    expect(circleElement).toMatchSnapshot();
  });
});
