// calculateDistancePoints.js

//const distance = 90;
//const hillSize = "normal" // normal, big, mamut 
//const kPoint = 94;
const calculateDistancePoints = (distance, hillSize, kPoint) => {

    let score = 0;
    let difference = Math.abs(kPoint - distance);
    
    if (hillSize === "mamut") {
      score += 120;
      if (distance > kPoint) {
        score += difference*1.2;
      }
      if (distance < kPoint) {
        score -= difference*1.2;
      } 

    } else {
      score += 60;

      if ( hillSize === "normal"){
        (distance > kPoint) ? score += difference*2 : score;
        (distance < kPoint) ? score -= difference*2 : score;
      }
      if ( hillSize === "big"){

        (distance > kPoint) ? score += difference*1.8 : score;
        (distance < kPoint) ? score -= difference*1.8 : score;
      }

    }
    return score;
  };

  module.exports = calculateDistancePoints;