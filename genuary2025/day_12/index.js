const CM_TO_INCH = 2.54
const WIDTH_CM = 20
const HEIGHT_CM = 20
const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
const DPI = 300
const WIDTH = Math.round(WIDTH_INCHES * DPI)
const HEIGHT = Math.round(HEIGHT_INCHES * DPI)
const LINES = 42
const INTERVAL = (HEIGHT / LINES)
const COLORS = ["#006ba6", "#0496ff", "#ffbc42", "#d81159", "#8f2d56"]
//const COLORS = ["#adc178","#a98467","#6c584c"]
const BACKGROUND_COLOR = "#f4f1de"
const SMOOTH_LEVEL = 10

const tree = (originalDepth = 3, depth = 3, distance = 10, x = 0, y = 0, angle = 0, deg = 10) => {
  const start = [x, y]
  const end = [x + distance * sin(angle), y - distance * cos(angle)]
  //let color = COLORS[0]

  // if (depth < originalDepth / 2) {
  //     strokeWeight(2)
  //     stroke(COLORS[0])
  // } else if (depth > originalDepth / 2 && depth < originalDepth - 5) {
  //     strokeWeight(2)
  //     stroke(COLORS[0])
  // } else {
  //     strokeWeight(2)
  //     stroke(COLORS[0])
  // }
  strokeWeight(1)
  stroke(0)
  //stroke(COLORS[int(x % (COLORS.length - 1))])

  line(
    start[0],
    start[1],
    end[0],
    end[1]
  )
  if (depth > 0) {
    const newDeg = int(random(deg, deg + 45))
    //const newDeg = deg
    tree(originalDepth, depth - 1, distance / 1.5, end[0], end[1], (newDeg))
    tree(originalDepth, depth - 1, distance / 1.5, end[0], end[1], (-newDeg))
  }
}

function setup() {
  createCanvas(WIDTH, HEIGHT)
  background(BACKGROUND_COLOR)
  fill(BACKGROUND_COLOR)
  strokeWeight(1)
  tree(10, 10, HEIGHT / 3.5, WIDTH / 2, HEIGHT, 0, 25)
  //tree(11, 15, 500, WIDTH/2 + WIDTH/5, HEIGHT, 0, 25)
  //tree(16, 15, 800, WIDTH/2 - WIDTH/7, HEIGHT, 0, 45)
}