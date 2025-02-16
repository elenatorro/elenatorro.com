const CM_TO_INCH = 2.54
const WIDTH_CM = 5
const HEIGHT_CM = 5
const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
const DPI = 300
const WIDTH = Math.round(WIDTH_INCHES * DPI)
const HEIGHT = Math.round(HEIGHT_INCHES * DPI)
const COLORS = [
  "#f94144", "#f3722c", "#f8961e", "#f9844a", "#f9c74f",
  "#90be6d", "#43aa8b", "#4d908e", "#577590", "#277da1"
]
const BACKGROUND_COLOR = "#f94144"

function setup() {
  createCanvas(WIDTH, HEIGHT)
  background(BACKGROUND_COLOR)
  fill(BACKGROUND_COLOR)
  strokeWeight(1)
  for (let i = 0; i < WIDTH; i += 1) {
    for (let j = 0; j < HEIGHT; j += 10) {
      beginShape()
      for (let k = 0; k < 10; k++) {
        stroke(COLORS[i % (COLORS.length - 1)])
        curveVertex(i + noise(i) * random(-k * 2, k * 2), j + k)
        curveVertex(i + noise(i) * random(-k * 2, k * 2), j)
        curveVertex(i + noise(i) * random(-k * 2, k * 2), j - k)
      }
      endShape()
    }
  }
}
