const CM_TO_INCH = 2.54
const WIDTH_CM = 25
const HEIGHT_CM = 25
const MARGIN_CM = 0.1
const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
const MARGIN_INCHES = MARGIN_CM / CM_TO_INCH
const DPI = 300
const SCROLL_MARGIN_CM = 1

const WIDTH = Math.round(WIDTH_INCHES * DPI)
const HEIGHT = Math.round(HEIGHT_INCHES * DPI)
const MARGIN = Math.round(MARGIN_INCHES * DPI)
const SCROLL_MARGIN = Math.round(SCROLL_MARGIN_CM * DPI)
const N = 5
const M = 5
const size = (WIDTH - MARGIN) / N
//const COLORS = ["#cad2c5","#84a98c","#52796f","#354f52","#2f3e46"]
const COLORS = ["#9fffcb","#25a18e","#7ae582"]


function drawStaticScene() {
  strokeWeight(1)
  fill("#00a5cf")
  rect(0, 0, WIDTH + MARGIN, HEIGHT + MARGIN)
}

const flower7 = (x, y, size) => {
  noStroke()
  stroke(255)
  strokeWeight(10)

  const petal_radius = size / 1.5
  push()
  translate(x + size / 2, y + petal_radius * 1.5)
  fill(COLORS[0])
  push()
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()

  fill(COLORS[2])
  push()
  rotate(1)
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()

  fill(COLORS[2])
  push()
  rotate(-1)
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()

  fill(COLORS[1])
  push()
  rotate(0.5)
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()

  fill(COLORS[1])
  push()
  rotate(-0.5)
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()
  pop()
  noFill()
}

function drawTrees(x, y, size) {
  fill('green')
  circle(x, y, size)
  noFill()
}

function setup() {
  createCanvas(WIDTH + MARGIN, HEIGHT + MARGIN)
}

let ticks = 0

function draw() {
  clear()
  drawStaticScene()

  const RESET = WIDTH * 3

  ticks +=1

  for (let i = -10; i < N + 10; i++) {
    for (let j = -10; j < M + 10; j++) {
      if (i % 2 == 0) {
        flower7(ticks + (size * i), (j) * size - ticks, size)
      } else {
        flower7(ticks + (size * i), (j) * size + ticks, size)
      }
    }
  }
}
