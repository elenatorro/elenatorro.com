const CM_TO_INCH = 2.54
const WIDTH_CM = 15
const HEIGHT_CM = 15
const MARGIN_CM = 0
const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
const MARGIN_INCHES = MARGIN_CM / CM_TO_INCH
const DPI = 300

const WIDTH = Math.round(WIDTH_INCHES * DPI)
const HEIGHT = Math.round(HEIGHT_INCHES * DPI)
const MARGIN = Math.round(MARGIN_CM * DPI)
const N = 10
const M = 10
const size = ((WIDTH) / N)
const COLORS = ["#03071e", "#370617", "#6a040f", "#9d0208", "#d00000", "#dc2f02", "#e85d04", "#f48c06", "#faa307", "#ffba08"]

// let COLORS = []


function setup() {
  createCanvas(WIDTH, HEIGHT)
  fill('white')


  function triangle1(x, y, i, j, size, delay) {
    const s = size / 2
    const h = 0.5 * sqrt(3) * size
    const x1 = x - s,
      y1 = y - h / 2,
      x2 = x,
      y2 = y + h / 2,
      x3 = x + s,
      y3 = y - h / 2
    const c1 = color(COLORS[1])
    c1.setAlpha(100)
    fill(c1)
    triangle(x1, y1 - delay, x2, y2 - delay, x3, y3 - delay)
    const c2 = color(COLORS[3])
    //c2.setAlpha(100)
    fill(c2)
    const a1 = x - s,
      b1 = y - h / 2,
      a2 = x,
      b2 = y + h / 2,
      a3 = x + s,
      b3 = y - h / 2
    triangle(a1, b1 + delay, a2, b2 + delay, a3, b3 + delay)
  }

  push()
  noStroke()
  background(COLORS[2])
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      triangle1(size / 2 + i * size, size / 2 + j * size, i, j, size, 0)
      triangle1(size / 2 + i * size, size / 2 + j * size, i, j, size, 100)
      triangle1(size / 2 + i * size, size / 2 + j * size, i, j, size, 200)
      triangle1(size / 2 + i * size, size / 2 + j * size, i, j, size, 300)
    }
  }
  pop()
}