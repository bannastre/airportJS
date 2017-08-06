const weather = new Weather

describe('Weather', () => {
  it('is fair by default', () => {
    expect(weather.state).toEqual('fair')
  })

  it('can be switched to stormy', () => {
    weather.switch()
    expect(weather.state).toEqual('stormy')
  })
})
