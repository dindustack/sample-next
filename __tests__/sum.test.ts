import { sum } from "../helpers/sum";

describe("the sum function", () => {
  test("two plus two is four", () => {
    expect(sum([2, 2])).toBe(4);
  });

  test("minus nine plus fourteen is six", () => {
    expect(sum([-9, 14])).toBe(5);
  });

  test("two plus two plus minus four is zero", () => {
    expect(sum([2, 2, -4])).toBe(0);
  });
});
