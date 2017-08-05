const airport = new Airport
const plane = {name: "planeyMcPlaneFace"}

describe('Airport', () => {
  it('can land a plane', () => {
    airport.landPlane(plane)
    expect(airport.planes[0]["name"]).toMatch("planeyMcPlaneFace")
  })

  it('can clear a plane for take-off', () => {
    airport.landPlane({name: 'plane2'})
    airport.clearPlane(plane)
    expect(airport.planes[0]["name"]).toMatch("plane2")
  })
})
