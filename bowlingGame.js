
const bowlingScores = (scoreBoard) => {

  let total = 0;
  let frameCount = 0;

  // using a stack-like mechanism so I can shift and unshift to peek at the next values in  spare or strike conditions.
  while (scoreBoard.length > 0) {

    frameCount++
    let currentFrame = scoreBoard.shift().trim();

    // SPARE
    if (frameCount < 11 && isSpare(currentFrame)) {

      total += getScoreValue("/");
      total += (isEndGame(frameCount) ? getScoreValue(currentFrame[2]) : handleSpare(scoreBoard));
    }

    // STRIKE 
    else if (frameCount < 11 && isStrike(currentFrame)) {

      total += getScoreValue(currentFrame);
      let maxStrikeCount = 2;
      total += handleStrike(maxStrikeCount, scoreBoard);
    } 
    // PLAIN FRAME
    else if (frameCount < 11) {

      total += handleNumberPair(currentFrame);
    }
  }
  
  return total;
} 

const isSpare = (thisFrame) => thisFrame.includes("/"); 

const isStrike = (thisFrame) => thisFrame === "X"; 

const isEndGame = (frameCount) => frameCount === 10;

const handleNumberPair = (frame) => {
  let total = getScoreValue(frame[0]);
  total += getScoreValue(frame[1]);
  return total;
}

const handleSpare = (scoreBoard) => {
    let total = 0;
    const pair = scoreBoard.shift();
    if(pair) {
      total = getScoreValue(pair[0]);
      scoreBoard.unshift(pair);
    }
  return total;
}

const handleStrike = (strikeCount, scoreBoard) => {

  let total = 0;
  const nextFrame = scoreBoard.shift();
  strikeCount--;
  if (isStrike(nextFrame)) { 

    total += getScoreValue(nextFrame);
    if ( strikeCount > 0 ) {
      total += handleStrike(strikeCount, scoreBoard); // recursive but only twice to allow for end game
    }
  }
  else if (isSpare(nextFrame)) {

    total += strikeCount === 1? getScoreValue("/") : getScoreValue(nextFrame[0]);
  }
  else {

    total += handleNumberPair(nextFrame);
  }
  scoreBoard.unshift(nextFrame);
  return total;
}

const getScoreValue = (score) => {

  let scoreValue = 0;

  if ( score === undefined ) scoreValue = 0;
  else if ( score === "-" ) scoreValue = 0;
  else if ( score === "/" ) scoreValue = 10;
  else if ( score === "X" ) scoreValue = 10;
  else scoreValue = parseInt(score);

  return scoreValue;  
}

module.exports = { bowlingScores };
