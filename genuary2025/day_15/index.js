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
const COLORS = ["#006ba6", "#0496ff", "#ffbc42", "#d81159", "#8f2d56"].reverse()
//const COLORS = ["#f4f1de","#e07a5f","#3d405b","#81b29a","#f2cc8f"].reverse()
const BACKGROUND_COLOR = COLORS[0]
const ROWS = 4
const COLUMNS = 6
const SIZE = (WIDTH / ROWS) * 2

const cross1 = (x = 0, y = 0, size = 0) => {
  const cSize = size
  const minS = size / 4
  stroke(COLORS[2])
  strokeWeight(size / 12)
  line(x, y, x + cSize, y + cSize)
  line(x + cSize, y, x, y + cSize)
  stroke(COLORS[3])
  line(x, y + minS, x + minS, y)
  line(x, y + cSize - minS, x + minS, y + cSize)
  line(x, y + cSize - minS, x + minS, y + cSize)
  line(x + cSize - minS, y, x + cSize, y + minS)
  line(x + cSize - minS, y + cSize, x + cSize, y + cSize - minS)
}

function setup() {
  createCanvas(WIDTH, HEIGHT)
  background(BACKGROUND_COLOR)
  fill(BACKGROUND_COLOR)
  strokeWeight(2)

  const cross2 = (x = 0, y = 0, size = 0, level = 4) => {
    noFill()
    strokeWeight(size / (random(20, 30)))
    const minS = size / 15
    for (let i = random(5, 10); i > 0; i--) {
      for (let j = 0; j < i; j++) {
        //stroke(COLORS[int(random(0, COLORS.length - 1))])
        stroke(COLORS[0])
        line(x + j * random(-minS * 2, minS * 2) + j * random(-minS, minS * 2), y + i * random(-minS * 2, minS / 2), x + j * minS + j * random(-minS, minS * 2) + random(-minS * 2, minS * 2), y + i * random(0, minS))
      }
    }
  }

  const cSize = SIZE / 2
  for (let i = 0; i < ROWS * 2; i++) {
    for (let j = 0; j < COLUMNS * 2; j++) {
      //cross1(i * cSize * 2 + (cSize / 2), j * cSize * 2 + (cSize / 2), cSize)
      cross2(i * cSize + (cSize / 4), j * cSize + (cSize / 4), cSize, random(2, 6))
      cross1(i * cSize, j * cSize, cSize)
    }
  }
  strokeWeight(50)
  stroke(COLORS[3])
  noFill()
  rect(0, 0, WIDTH, HEIGHT)
}