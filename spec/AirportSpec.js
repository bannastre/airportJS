describe("Airport", function() {
  var airport

  beforeEach(function() {
    airport = new Airport;
    plane = new Plane;
  });

  it("should show an empty list of landed planes", function(){
    expect(airport.planesInAirport).toEqual([]);
  });
});
