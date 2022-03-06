
const bowlingScores = (scoreBoard) => {
  let total = 0;
  scoreBoard.forEach(frame => {
    if (frame === "-") total += 0;

  });
  return total;
}

module.exports = { bowlingScores };
