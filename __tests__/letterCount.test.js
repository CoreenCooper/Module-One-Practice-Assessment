const letterCount = require("../problems/letterCount");

describe("letterCount", () => {
  test("returns an empty object for empty strings", () => {
    expect(letterCount("")).toEqual({});
  });
  test("returns the right count", () => {
    expect(letterCount("hello")).toEqual({h: 1, e: 1, l: 2, o: 1});
  });
  test("is insensitive to capital letters", () => {
    expect(letterCount("HeLlo")).toEqual({h: 1, e: 1, l: 2, o: 1});
  });
  test("correctly ignores spaces", () => {
    expect(letterCount("HeLlo World")).toEqual({
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      w: 1,
      r: 1,
      d: 1,
    });
  });

});
