var Airport = function() {
  this.planesInAirport = []
};

Airport.prototype.landPlane = function(plane) {
  this.planesInAirport.push(plane);
};

Airport.prototype.takeOffPlane = function(plane) {
  this.planesInAirport.pop(plane);
};
