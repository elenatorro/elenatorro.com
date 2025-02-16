const CM_TO_INCH = 2.54
const WIDTH_CM = 10
const HEIGHT_CM = 10
const MARGIN_CM = 0.1
const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
const MARGIN_INCHES = MARGIN_CM / CM_TO_INCH
const DPI = 300

//const colors = ["#001524","#15616d","#ffecd1","#ff7d00","#78290f"]
const colors = ["#f94144","#f3722c","#f8961e","#f9844a","#f9c74f","#90be6d","#43aa8b","#4d908e","#577590","#277da1"]

//const colors = ["#0466c8","#0353a4","#023e7d","#002855","#001845","#001233","#33415c","#5c677d","#7d8597","#979dac"]
const WIDTH = Math.round(WIDTH_INCHES * DPI)
const HEIGHT = Math.round(HEIGHT_INCHES * DPI)
const MARGIN = Math.round(MARGIN_INCHES * DPI)
const N = 10
const M = 10
const size = WIDTH / N
const COLORS = ["#9fffcb", "#25a18e", "#7ae582"]

function gridBox(x, y, size) {
  stroke(colors[3])
  strokeWeight(2)
  noFill()
  square(x, y, size * 2)
}

function box1(x, y, size) {
  noStroke()
  square(x, y, size * 2)
  noFill()
}

const USE_COLORS = true
const STROKE_WEIGHT = 1

const blockEmpty = (size, x = 0, y = 0) => {
  if (USE_COLORS) {
    fill(255)
    noStroke()
  } else {
    fill(255)
    // strokeWeight(STROKE_WEIGHT)
    // stroke(0, 0, 0)
    noStroke()
  }

  square(x, y, size)
}

const blockTrianglesLeft = (size, x = 0, y = 0, colorBG = true) => {
  if (USE_COLORS && colorBG) {
    fill(random(colors))
    noStroke()
    square(x, y, size)
  }

  //

  if (USE_COLORS) {
    fill(random(colors))
    triangle(x, y, x, y + size, x + size, y + size)
    //triangle(x, y, x + size, y, x + size, y + size)
  }
}

const blockTrianglesRight = (size, x = 0, y = 0, colorBG = true) => {
  if (USE_COLORS && colorBG) {
    fill(random(colors))
    noStroke()
    square(x, y, size)
  }

  if (USE_COLORS) {
    fill(random(colors))
  }
  triangle(x + size, y + size, x, y + size, x + size, y)
}

const block3 = (size, x = 0, y = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  //square(x, y, size)

  if (USE_COLORS) {
    fill(random(colors))
  }
  triangle(x, y, x, y + size, x + size, y + size)

  if (USE_COLORS) {
    fill(random(colors))
  }
  triangle(x, y, x, y + size, x + size, y)
}

const blockCircleTop = (size, x = 0, y = 0, r = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  square(x, y, size)
  r = r != 0 ? r : size

  if (USE_COLORS) {
    fill(random(colors))
  }

  arc((size / 2 + x), (size / 2 + y), r, r, PI, -HALF_PI)
  arc((size / 2 + x), (size / 2 + y), r, r, -HALF_PI, PI * 2)

  if (USE_COLORS) {
    rect(x, y, size, size / 2)
  }
}

const blockCircleBottom = (size, x = 0, y = 0, r = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    rect(x, y, size, size / 2)
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  r = r != 0 ? r : size

  if (USE_COLORS) {
    fill(random(colors))
  }

  arc((size / 2 + x), (size / 2 + y), r, r, 0, PI)

  if (USE_COLORS) {
    rect(x, y, size, size / 2)
  }
}

const blockSemiCircleBottom = (size, x = 0, y = 0, r = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  r = r != 0 ? r : size

  if (USE_COLORS) {
    fill(random(colors))
  }

  rect(x, y, size, size / 2)

  if (USE_COLORS) {
    fill(random(colors))
  }
  strokeWeight(STROKE_WEIGHT)

  arc((size / 2 + x), y, r, r, 0, PI)
}

const blockCircleLeft = (size, x = 0, y = 0, r = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  //square(x, y, size)

  if (USE_COLORS) {
    fill(random(colors))
  }

  r = r != 0 ? r : size
  arc((size / 2 + x), (size / 2 + y), r, r, HALF_PI, -HALF_PI)

  if (USE_COLORS) {
    rect(x, y, size, size / 2)
  }
}

const blockCircleRight = (size, x = 0, y = 0, r = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  //square(x, y, size)
  r = r != 0 ? r : size

  if (USE_COLORS) {
    fill(random(colors))
  }

  arc((size / 2 + x), (size / 2 + y), r, r, -HALF_PI, HALF_PI)

  if (USE_COLORS) {
    rect(x, y, size, size / 2)
  }
}

const blockDot = (size, x = 0, y = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  //square(x, y, size)

  if (USE_COLORS) {
    fill(random(colors))
  }

  ellipse(x + size / 2, y + size / 2, size / 2)
}

const blockRecursion = (size, x = 0, y = 0, levels = 3) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    noStroke()
    fill(255)
    square(x, y, size)
    strokeWeight(STROKE_WEIGHT)
    stroke(0, 0, 0)
  }

  for (let i = 1; i < levels; i++) {
    if (USE_COLORS) {
      fill(random(colors))
    }

    ellipse(x + size / 2, y + size / 2, size / i)
  }
}

const blockDotsS = (size, x = 0, y = 0) => {
  const n = 4
  const r = size / n

  if (USE_COLORS) {
    fill(random(colors))
    square(x, y, size)
    noStroke()
  } else {
    noStroke()
    fill(255)
    square(x, y, size)
    strokeWeight(STROKE_WEIGHT)
    stroke(0, 0, 0)
  }

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if (USE_COLORS) {
        fill(random(colors))
      }
      ellipse(x + (r * i * 2) + r, y + (r * j * 2) + r, r)
    }
  }
}

const blockDotsM = (size, x = 0, y = 0) => {
  const n = 4
  const r = size / n

  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  ////square(x, y, size)

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if (USE_COLORS) {
        fill(random(colors))
      }
      ellipse(x + (r * i * 2) + r, y + (r * j * 2) + r, r * 1.5)
    }
  }
}

const blockDotsL = (size, x = 0, y = 0) => {
  const n = 4
  const r = size / n

  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  //square(x, y, size)

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if (USE_COLORS) {
        fill(random(colors))
      }
      ellipse(x + (r * i * 2) + r, y + (r * j * 2) + r, r * 2)
    }
  }
}

const blockStar = (size, x = 0, y = 0, r = 0, colorBG = true) => {
  if (USE_COLORS && colorBG) {
    fill(random(colors))
    square(x, y, size)
    noStroke()
  } else {
    noFill()
    square(x, y, size)
  }

  r = r != 0 ? r : size

  if (USE_COLORS) {
    fill(random(colors))
  }
  arc(x, y, r, r, 0, HALF_PI)
  arc(x, y + size, r, r, -HALF_PI, 0)
  arc(x + size, y, r, r, HALF_PI, PI)
  arc(x + size, y + size, r, r, PI, -HALF_PI)
}

const blockSquares = (size, x = 0, y = 0, squares = 3) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  //square(x, y, size)

  for (let i = 0; i < squares; i++) {
    for (let j = 0; j < squares; j++) {
      if (USE_COLORS) {
        // FIXME
        fill(random(colors))
      }
      square(
        x + i * (size / squares),
        y + j * (size / squares),
        size / squares
      )
    }
  }
}

const blockLinesVertical = (size, x = 0, y = 0, lines = 3) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  //square(x, y, size)

  for (let i = 0; i < lines; i++) {
    if (USE_COLORS) {
      fill(random(colors))
    }
    rect(
      x + i * (size / lines),
      y,
      size / lines,
      size
    )
  }
}

const blockLinesHorizontal = (size, x = 0, y = 0, lines = 3) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  //square(x, y, size)

  for (let i = 0; i < lines; i++) {
    if (USE_COLORS) {
      fill(random(colors))
    }
    rect(
      x,
      y + i * (size / lines),
      size,
      size / lines
    )
  }
}

const blocks = [
  blockCircleBottom, blockCircleLeft, blockCircleRight, blockCircleTop, blockDot, blockDotsL, blockDotsS, blockDotsM, blockLinesHorizontal, blockLinesVertical, blockTrianglesLeft, blockTrianglesRight, block3, blockRecursion, blockSemiCircleBottom, blockSquares, blockStar
]

function door(x, y, size) {
  if (USE_COLORS) {
    fill(random(colors))
  }
  rect(x * size, y * size, size * 2, size * 2)
  if (USE_COLORS) {
    fill(random(colors))
  }
  rect(x * size, y * size + size, size * 2, size * 2)
  arc(x * size + size, y * size + size, size * 2, size * 2, PI, PI * 2)
  noFill()
}

function tower(x, y, w, h, size, color) {
  if (USE_COLORS) {
    fill(color)
  }
  rect(x * size, y * size + h * size, size * w, size * h)
  noFill()
}

function setup() {
  createCanvas(WIDTH, HEIGHT)

  // for (let i = 0; i < N; i+=2) {
  //   for (let j = 2; j < M - 4; j+=2) {
  //     if (i % 2 == 0) {
  //       box1(i * size + size / 2, j * size + size / 2, size / 2)
  //     } else {
  //     }
  //   }
  // }

  background("#caf0f8")
  //background("#990d35")
  for (let i = 0; i < N; i++) {
    for (let j = 4; j < M; j++) {
      if (USE_COLORS) {
        fill(colors[3])
        square(i * size, j * size, size)
      }
      blocks[int(random(0, blocks.length))](size, i * size, j * size)
    }
  }

  blockTrianglesRight(size * 2, 0, size * 2, false)
  blockTrianglesLeft(size * 2, size * 2, size * 2, false)

  blockTrianglesRight(size * 2, size * (N - 4), size * 2, false)
  blockTrianglesLeft(size * 2, size * (N - 2), size * 2, false)

  blockDotsS(size * 2, size * 4, size * 2)
  blockRecursion(size * 2, size * 4, 0)
  blockDot(size, size * 1.5, size * 1.25)
  blockDot(size, size * 7.5, size * 1.25)

  const towerColor = random(color)
  tower(0, 0, int(N / 6), int(M / 2), size, towerColor)
  tower(3, 0, int(N / 6), int(M / 2), size, towerColor)
  tower(N - 1, 0, int(N / 6), int(M / 2), size, towerColor)
  tower(N - 4, 0, int(N / 6), int(M / 2), size, towerColor)
  door(N / 2 - 1, M / 2 + 2, size)

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      stroke(0)
      gridBox(i * size, j * size, size / 2)
    }
  }
}