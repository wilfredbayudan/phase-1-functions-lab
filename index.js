// Code your solution in this file!
const blocksInFt = 264;
const scuberHq = 42;

function distanceFromHqInBlocks(location) {
  return Math.abs(scuberHq - location);
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * blocksInFt;
}

function distanceTravelledInFeet(a, b) {
  return Math.abs(a - b) * blocksInFt;
}

function calculatesFarePrice(a, b) {
  const travelledInFt = distanceTravelledInFeet(a, b);
  let fare;
    if (travelledInFt > 2500) {
      fare = 'cannot travel that far';
    } else if (travelledInFt > 2000) {
      fare = 25;
    } else if (travelledInFt > 400) {
      fare = (travelledInFt - 400) * 0.02; 
    } else {
      fare = 0;
    }
    return fare;
}