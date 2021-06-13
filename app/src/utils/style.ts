function getMediaQuery(size: number) {
  class MediaQuery {
    size = 0
    min = ''
    max = ''

    constructor(size: number) {
      this.size = size
      this.min = `(min-width: ${this.size}px)`
      this.max = `(max-width: ${this.size}px)`
    }
    toString() {
      return this.max
    }
  }

  return new MediaQuery(size)
}

export const BREAKPOINTS = {
  XS: getMediaQuery(0),
  SM: getMediaQuery(320),
  MD: getMediaQuery(768),
  LG: getMediaQuery(1024),
  XL: getMediaQuery(1440),
}
