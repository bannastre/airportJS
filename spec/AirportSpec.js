const airport = new Airport
const plane = {name: "planeyMcPlaneFace"}

describe('Airport', () => {

  it('can land a plane', () => {
    airport.landPlane(plane)
    expect(airport.planes[0]["name"]).toMatch("planeyMcPlaneFace")
  })

  it('can clear a plane for take-off', () => {
    airport.clearPlane(plane)
    expect(airport.planes).toEqual([])
  })

  it('does not land a plane if the weather is stormy', () => {
    spyOn(airport, 'landPlane').and.throwError("it's too stormy")
    expect(() => { airport.landPlane(plane) } ).toThrowError("it's too stormy")
  })
})
