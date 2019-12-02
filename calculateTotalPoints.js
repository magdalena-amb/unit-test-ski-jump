// calculateTotalPoints.js
const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);

  const total = (distancePoints + stylePoints + windFactor + gateFactor).toFixed(1);
  
  return total;
}

//calculateTotalPoints(227.5, "mamut", 200, [18, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7);
//calculateTotalPoints(226, "mamut", 200, [18.5, 18.5, 18.5, 18.5, 18], -8.9, 8.7);


module.exports = calculateTotalPoints;