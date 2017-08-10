const planes = []
const capacity = 2
const airport = new Airport(planes, capacity)

describe('Airport', () => {
  it('can land a plane', () => {
    airport.landPlane(plane)
    expect(airport.planes[0]).toBe(plane)
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
    expect(airport.planes[0]).toBe(plane)
  })

  it('has a default capacity', () => {
    expect(airport.capacity).toBe(2)
  })

  it('does not allow a plane to land when at capacity', () => {
    airport.landPlane(plane)
    airport.landPlane(plane)
    expect(airport.planes[2]).toBeUndefined()
  })

  it('can update capacity', () => {
    airport.updateCapacity(20)
    airport.landPlane(plane)
    expect(airport.planes[2]).toBe(plane)
  })
})
