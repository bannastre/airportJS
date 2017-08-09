class Weather {

  state() {
    return ((this.generator() > 50) ? 'stormy' : 'fair')
  }

  generator() {
    return Math.floor((Math.random() * 100))
  }
}
