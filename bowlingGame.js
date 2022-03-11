
const bowlingScores = (scoreBoard) => {

  let total = 0;

  // using a stack-like mechanism so I can shift and unshift to get the next values in the spare or strike condition.
  while (scoreBoard.length > 0) {

    let current = scoreBoard.shift().trim();

    if (current.includes("/")) {
      total += getScoreValue("/");
      const sparePair = scoreBoard.shift();
      total += getScoreValue(sparePair[0]);
      scoreBoard.unshift(sparePair);
    }
    else if (current === "X") {
      total += getScoreValue(current);
      const strikePair = scoreBoard.shift();
      total += getScoreValue(strikePair[0]); 
      total += getScoreValue(strikePair[1]);
      scoreBoard.unshift(strikePair);
    }
    else {
      total += getScoreValue(current[0]); 
      total += getScoreValue(current[1]);
    }
  }
  
  return total;
}

const getScoreValue = (score) => {

  let scoreValue = 0;

  if ( score === "-" ) scoreValue = 0;
  else if ( score === "/" ) scoreValue = 10;
  else if ( score === "X" ) scoreValue = 10;
  else scoreValue = parseInt(score);

  return scoreValue;  
}

module.exports = { bowlingScores };
