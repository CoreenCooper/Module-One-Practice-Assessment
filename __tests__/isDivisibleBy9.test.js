const isDivisibleBy9 = require("../problems/isDivisibleBy9");

describe("isDivisibleBy9", () => {
  test("returns true for correct answers", () => {
    expect(isDivisibleBy9(9)).toBe(true);
    expect(isDivisibleBy9(27)).toBe(true);
    expect(isDivisibleBy9(99)).toBe(true);
    expect(isDivisibleBy9(0)).toBe(true);
  });
  test("returns false for incorrect answers", () => {
    expect(isDivisibleBy9(16)).toBe(false);
    expect(isDivisibleBy9(20)).toBe(false);
    expect(isDivisibleBy9(100)).toBe(false);
  });

});
