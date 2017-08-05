describe("plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane;
  });

  it("should show as airborn until it lands", function() {
    expect(plane.landed).toEqual(false);
  });

  it("should show as landed when the plane lands", function() {
    plane.land()
    expect(plane.landed).toEqual(true);
  });

  it("should show as airborn after it takes off", function() {
    plane.takeOff()
    expect(plane.landed).toEqual(false);
  });
});
