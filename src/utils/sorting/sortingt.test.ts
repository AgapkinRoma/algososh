import { bubbleSort, selectionSort } from "./sorting";

describe("bubleSort test", () => {
  test("пустой массив", () => {
    expect(bubbleSort([])).toEqual([[[], -1, -1, -1]]);
  });

  test("массив из 1 элемента", () => {
    expect(bubbleSort([1])).toEqual([[[1], -1, -1, -1]]);
  });
  test("массив из нескольких элементов", () => {
    expect(bubbleSort([3, 2, 1])).toEqual([
      [[3, 2, 1], 0, 1, 2],
      [[2, 3, 1], 1, 2, 2],
      [[2, 1, 3], 0, 1, 1],
      [[1, 2, 3], -1, -1, -1],
    ]);
  });
});
describe("selectionSort test", () => {
  test("пустой массив", () => {
    expect(selectionSort([])).toEqual([[[], -1, -1, 1]]);
  });
  test("массив из 1 элемента", () => {
    expect(selectionSort([1])).toEqual([[[1], -1, -1, 1]]);
  });
  test("массив из нескольких элементов", () => {
    expect(selectionSort([3, 2, 1])).toEqual([
      [[3, 2, 1], 0, 1, 0],
      [[3, 2, 1], 1, 2, 0],
      [[1, 2, 3], 1, 2, 1],
      [[1, 2, 3], -1, -1, 3],
    ]);
  });
});
