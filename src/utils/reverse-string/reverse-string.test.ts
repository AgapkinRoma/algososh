import { reverseStringBySteps } from "./reverse-string";

describe("Тестирование алгоритма разворота строки", () => {
  test("разворот строки с четным кол-вом символов", () => {
    expect(reverseStringBySteps("12")).toEqual([
      ["1", "2"],
      ["2", "1"],
    ]);
  });
  test("разворот строки с нечетным кол-вом символов", () => {
    expect(reverseStringBySteps("123")).toEqual([
      ["1", "2", "3"],
      ["3", "2", "1"],
    ]);
  });
  test("разворот строки с одним символом", () => {
    expect(reverseStringBySteps("1")).toEqual([["1"]]);
  });
  test("разворот строки с пустой строкой", () => {
    expect(reverseStringBySteps("")).toEqual([[]]);
  });
});
