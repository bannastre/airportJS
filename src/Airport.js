class Airport {
  constructor(planes = []) {
    this.planes = planes
  }

  landPlane(plane) {
    return this.planes.push(plane)
  }
}
