describe("Airport", function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport;
    plane = new Plane;
    isWeatherStormy = false;
  });

  it("should show an empty list of landed planes", function(){
    expect(airport.planesInAirport).toEqual([]);
  });

  it("should allow a plane to land", function(){
    airport.landPlane(plane);
    expect(airport.planesInAirport).toEqual([plane]);
  });

  it("should allow planes to take_off", function() {
    airport.takeOffPlane(plane);
    expect(airport.planesInAirport).toEqual([]);
  });

  it("should prevent planes from landing", function(){
    isWeatherStormy = true;
    expect(function() {
      airport.landPlane(plane);
    }).toThrowError("Not possible do you stormy weather");
  });
});
