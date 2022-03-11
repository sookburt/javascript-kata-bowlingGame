
const bowlingScores = (scoreBoard) => {

  let total = 0;
  let frameCount = 0;

  // using a stack-like mechanism so I can shift and unshift to get the next values in the spare or strike condition.
  while (scoreBoard.length > 0) {

    frameCount++
    let current = scoreBoard.shift().trim();

    // SPARE
    if (frameCount < 11 && current[1] === "/") {
      total += getScoreValue("/");
      if (frameCount === 10){
        total += getScoreValue(current[2]);
      } 
      else {
        const sparePair = scoreBoard.shift();
        total += getScoreValue(sparePair[0]); // next roll
        scoreBoard.unshift(sparePair);
      }
    }
    // STRIKE
    else if (frameCount < 11 && current[0] === "X") {
      total += getScoreValue(current);
      // get next frame
      const strikePair = scoreBoard.shift();

      // check if next is also a strike
      if (strikePair[0] === "X") {
        total += getScoreValue(strikePair[0]);
        // get next frame
        const strikePairInner = scoreBoard.shift();
        // also a strike
        if (strikePairInner[0] === "X") {
          total += getScoreValue(strikePairInner[0]);         
        }
        else {
          total += getScoreValue(strikePair[0]);
        }
        scoreBoard.unshift(strikePairInner);
      }
      // it's spare
      else if (strikePair[1] === "/")
      {
        total += getScoreValue(strikePair[1]);
      }
      else {
        total += getScoreValue(strikePair[0]); // next two rolls
        total += getScoreValue(strikePair[1]);
      }
      scoreBoard.unshift(strikePair);
    }
    else if (frameCount < 11) {
      total += getScoreValue(current[0]); 
      total += getScoreValue(current[1]);
    }
    else {
      //?
    }
  }
  
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
