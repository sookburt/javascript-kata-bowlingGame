
const bowlingScores = (scoreBoard) => {
  let total = 0;
  scoreBoard.forEach(frame => {
    if (frame === "-") total += 0;

    else if (frame === "X") total += 10; // alter later

    else if (frame.includes("/")) total += 10; // alter later

    else if (!Number.isNaN(parseInt(frame)) && frame.length === 2) { 
      const splitNums = frame.split("");
      total += splitNums.map(num => {
        return parseInt(num);
      }).reduce((a, b) => a + b, 0);
    }
  });
  
  return total;
}

module.exports = { bowlingScores };
