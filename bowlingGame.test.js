const { bowlingScores } = require("./bowlingGame");

describe("bowlingScores", () => {
  test("returns 0 total without array passed in", () => {
    expect(bowlingScores([])).toBe(0);
  });

  test("returns 0 total with gutter ball sent in", () => {
    expect(bowlingScores(["-"])).toBe(0);
  });

  test("pass in a single strike [\"X\"] expect 10", () => {
    expect(bowlingScores(["X"])).toBe(10);
  });

  test("pass in a single spare [\"/\"] expect 10", () => {
    expect(bowlingScores(["/"])).toBe(10);
  });

  test("pass in a number with a spare [\"6/\"] expect 10", () => {
    expect(bowlingScores(["6/"])).toBe(10);
  });

  test("pass in two numbers [\"22\"] expect sum of 4", () => {
    expect(bowlingScores(["22"])).toBe(4);
  });
  
  test("pass in two frames of numbers [\"62\", \"26\"] expect sum of 16", () => {
    expect(bowlingScores(["62", "26"])).toBe(16);
  });

  // pass in a frame with a number and a gutter but just return the number ["8-"] expect 8

  // pass in two frames with valid numbers and return the total ["42", "24"] expect 12

  // pass in two frames, first being a spare to calculate with spare ["2/", "22"] - 10+4+4 expect 18

  // pass in a a strike at the beginning, to calculate ["X", "22", "22"] 10+4+4 + 4+4 expect 26

  // pass in a full set of spares, with extra roll [5/, 5/, 5/, 5/, 5/, 5/, 5/, 5/, 5/, 5/5] expect 150

  // pass in full set of strikes [X, X, X, X, X, X, X, X, X, X, X, X] including two extra rolls, expect 300

});
