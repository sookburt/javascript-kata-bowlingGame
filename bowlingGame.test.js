const { bowlingScores } = require("./bowlingGame");

describe("bowlingScores", () => {
  test("returns 0 total without array passed in", () => {
    expect(bowlingScores([])).toBe(0);
  });

  test("returns 0 total with gutter ball sent in", () => {
    expect(bowlingScores(['-1'])).toBe(1);
  });

  test("pass in a single strike ['X', '22'] expect 18", () => {
    expect(bowlingScores(['X', '22'])).toBe(18);
  });

  test("pass in a single spare ['2/, '22'] expect 16", () => {
    expect(bowlingScores(['2/', '22'])).toBe(16);
  });

  test("pass in a number with a spare ['6', '22'] expect 16", () => {
    expect(bowlingScores(['6/', '22'])).toBe(16);
  });

  test("pass in two numbers ['22'] expect sum of 4", () => {
    expect(bowlingScores(['22'])).toBe(4);
  });
  
  test("pass in two frames of numbers ['62', '26'] expect sum of 16", () => {
    expect(bowlingScores(['62', '26'])).toBe(16);
  });

  // pass in a frame with a number and a gutter but just return the number ["8-"] expect 8

  // pass in two frames with valid numbers and return the total ["42", "24"] expect 12

  // pass in two frames, first being a spare to calculate with spare ["2/", "22"] - 10+4+4 expect 18

  // pass in a a strike at the beginning, to calculate ["X", "22", "22"] 10+4+4 + 4+4 expect 26

  // pass in a full set of spares, with extra roll [5/, 5/, 5/, 5/, 5/, 5/, 5/, 5/, 5/, 5/5] expect 150

  // pass in full set of strikes [X, X, X, X, X, X, X, X, X, X, X, X] including two extra rolls, expect 300

});
