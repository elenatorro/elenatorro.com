const CM_TO_INCH = 2.54
const WIDTH_CM = 10
const HEIGHT_CM = 10
const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
const DPI = 300
const WIDTH = Math.round(WIDTH_INCHES * DPI)
const HEIGHT = Math.round(HEIGHT_INCHES * DPI)
const LINES = 42
const INTERVAL = (HEIGHT / LINES)
const COLORS = ["#006ba6", "#0496ff", "#ffbc42", "#d81159", "#8f2d56"]
const BACKGROUND_COLOR = "#f4f1de"
const SMOOTH_LEVEL = 10

function setup() {
  createCanvas(WIDTH, HEIGHT)
  background(BACKGROUND_COLOR)
  fill(BACKGROUND_COLOR)
  strokeWeight(2)

  for (let i = 0; i < LINES; i++) {
    beginShape()
    stroke(COLORS[int(random(0, COLORS.length - 1))])
    for (let j = 0; j < WIDTH; j += SMOOTH_LEVEL) {
      curveVertex(j, (INTERVAL * i) + noise(i) * random(0, LINES))
    }
    endShape()
  }
}
