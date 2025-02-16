const CM_TO_INCH = 2.54
const WIDTH_CM = 10
const HEIGHT_CM = 10
const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
const DPI = 300
const WIDTH = Math.round(WIDTH_INCHES * DPI)
const HEIGHT = Math.round(HEIGHT_INCHES * DPI)
let COLORS = []

const bubble = (x = 0, y = 0, diameter = 5, colors = []) => {
  //noStroke()
  fill(colors[int(x % (colors.length - 1))])
  //stroke(colors[int(y % (colors.length - 1))])
  strokeWeight(0.1)
  push()
  translate(x - diameter, y - diameter)
  beginShape()
  for (let i = int(random(0, 180)); i <= (360 * 100); i += 240) {
    let rad = radians(i)
    const noiseOffset = random(1, 100)
    let offset = map(noise(rad + noiseOffset), 0, 1, 10, 60)
    const s = int(random(2, 8))
    const a = x + ((diameter - random(10, 30)) / s + offset) * cos(rad)
    const b = y + ((diameter - random(2, 30)) / s + offset) * sin(rad)
    curveVertex(a, b)
  }
  endShape(CLOSE)
  pop()
}

function setup() {
  createCanvas(WIDTH, HEIGHT)
  fill('white')
  const COLORS = []
  for (let i = 0; i < 10; i++) {
    const r = random(0, 255)
    const g = random(0, 255)
    const b = random(0, 255)
    COLORS.push(color(r, g, b))
  }
  background(COLORS[0])

  const SIZE = 100

  for (let i = 0; i < WIDTH; i += SIZE) {
    for (let j = 0; j < HEIGHT; j += SIZE) {
      bubble(i, j, int(random(-10, 100)), COLORS)
    }
  }
}