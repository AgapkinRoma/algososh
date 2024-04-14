import { render, screen, fireEvent } from "@testing-library/react";
import { Link } from "./link";
// ...
it("Нажатие на кнопку вызывает корректный alert", () => {
  window.alert = jest.fn();

  // Рендерим компонент
  render(<Link title="Рецепт пельменей" url="https://pelmeni.gov" />);

  // Находим элемент ссылки
  const link = screen.getByText("Рецепт пельменей");

  // Имитируем нажатие на ссылку
  fireEvent.click(link);

  // Проверяем, что alert сработал с правильным текстом предупреждения
  expect(window.alert).toHaveBeenCalledWith("Ура! Пельмени!");
});
