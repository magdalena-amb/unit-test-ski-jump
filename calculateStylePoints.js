// calculateStylePoints.js

const calculateStylePoints = (styleNotes) => {
  
  const min = Math.min(...styleNotes);
  const max = Math.max(...styleNotes);
  styleNotes.splice(styleNotes.indexOf(min), 1);
  styleNotes.splice(styleNotes.indexOf(max), 1);
  
  var score = 0;
  for (let i =0; i<styleNotes.length; i++){
    score += styleNotes[i];
  }
  return score;
};
  
module.exports = calculateStylePoints;
  