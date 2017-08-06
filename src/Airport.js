class Airport {
  constructor(planes = [], capacity = 20) {
    this.planes = planes
    this.capacity = capacity
  }

  landPlane(plane) {
    if ( this._checkWeather() == 'stormy') { return "it's too stormy" }
    return this.planes.push(plane)
  }

  clearPlane(plane) {
    if ( this._checkWeather() == 'stormy') { return "it's too stormy" }
    return this.planes.splice(this.planes.indexOf(plane), 1)
  }

  _checkWeather() {
    return weather.state
  }
}
