import { sum } from "../helpers/sum";

describe("the sum function", () => {
  test("two plus two is four", () => {
    const first = 2;
    const second = 4;
    const expectation = 6;
    const result = sum(first, second);
    expect(result).toBe(expectation);
  });
  
  test("minus eight plus fourteen is six", () => {
    const first = -9;
    const second = 14;
    const expectation = 5;
    const result = sum(first, second);
    expect(result).toBe(expectation);
  });
});
