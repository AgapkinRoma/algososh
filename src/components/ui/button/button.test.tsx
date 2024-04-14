import { Button } from "./button";
import { render, fireEvent, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

describe("Тестирование Button", () => {
  test("тест кнопки с текстом", () => {
    const buttonElement = renderer.create(<Button text="Test-text" />).toJSON();
    expect(buttonElement).toMatchSnapshot();
  });
  test("тест кнопки без текса", () => {
    const buttonElement = renderer.create(<Button text="" />).toJSON();
    expect(buttonElement).toMatchSnapshot();
  });
  test("тест заблокированной кнопки", () => {
    const buttonElement = renderer.create(<Button disabled={true} />).toJSON();
    expect(buttonElement).toMatchSnapshot();
  });
  test("тест кнопки с индикацией загрузки", () => {
    const buttonElement = renderer.create(<Button isLoader={true} />).toJSON();
    expect(buttonElement).toMatchSnapshot();
  });
  test("тест корректности вызова колбека при клике на кнопку", () => {
    const callback = jest.fn();
    render(<Button text="callback" onClick={callback} />);
    fireEvent.click(screen.getByText("callback"));
    expect(callback).toHaveBeenCalled();
  });
});
