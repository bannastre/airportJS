const airport = new Airport
const plane = {name: "planeyMcPlaneFace"}

describe('Airport', () => {
  it('can land a plane', () => {
    airport.landPlane(plane)
    expect(airport.planes[0]["name"]).toMatch("planeyMcPlaneFace")
  })
})
