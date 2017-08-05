class Airport {
  constructor(planes = []) {
    this.planes = planes
  }

  landPlane(plane) {
    return this.planes.push(plane)
  }

  clearPlane(plane) {
    var index = this.planes.indexOf(plane)
    return this.planes.splice(index, 1)
  }
}
