class Airport {
  constructor(planes = []) {
    this.planes = planes
  }

  landPlane(plane) {
    return this.planes.push(plane)
  }

  clearPlane(plane) {
    const index = this.planes.indexOf(plane)
    if ( this._checkWeather() != 'stormy') {
      return this.planes.splice(index, 1)
    } else { throw("it's too stormy") }
  }

  _checkWeather() {
    return weather.state
  }
}
