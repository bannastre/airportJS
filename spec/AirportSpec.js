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
    spyOn(airport, '_checkWeather').and.returnValue('stormy')
    airport.landPlane(plane)
    expect(airport.planes).toEqual([])
  })

  it('does not clear a plane if the weather is stormy', () => {
    airport.landPlane(plane)
    spyOn(airport, '_checkWeather').and.returnValue('stormy')
    airport.clearPlane(plane)
    expect(airport.planes[0]["name"]).toMatch("planeyMcPlaneFace")
  })
})
