const weather = new Weather

describe('Weather', () => {
  it('can randomly generate stormy', () => {
    spyOn(weather, 'generator').and.returnValue(51)
    expect(weather.state()).toEqual('stormy')
  })

  it('can randomly generate fair', () => {
    spyOn(weather, 'generator').and.returnValue(50)
    expect(weather.state()).toEqual('fair')
  })
})
