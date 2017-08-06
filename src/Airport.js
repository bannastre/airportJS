class Airport {
  constructor(planes = []) {
    this.planes = planes
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
