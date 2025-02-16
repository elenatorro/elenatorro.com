function setup() {
  const CM_TO_INCH = 2.54
  const WIDTH_CM = 15
  const HEIGHT_CM = 15
  const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
  const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
  const DPI = 300

  const WIDTH = Math.round(WIDTH_INCHES * DPI)
  const HEIGHT = Math.round(HEIGHT_INCHES * DPI)
  const COLOR_STEPS = 100
  const colors = ColorSteps.getColorSteps('#ff5400', '#03045e', COLOR_STEPS)

  const blockWave = (size, x = 0, y = 0, r = 0) => {
    r = r != 0 ? r : size

    if (x < int(WIDTH / 2) && y < (HEIGHT / 2)) {
      arc(x, y, r, r, 0, HALF_PI)
      arc(x, y + size, r, r, HALF_PI, -HALF_PI)
    } else if (x < int(WIDTH / 2) && y > (HEIGHT / 2)) {
      arc(x, y, r, r, HALF_PI, 0)
      arc(x, y + size, r, r, HALF_PI, -HALF_PI)
    } else if (x > int(WIDTH / 2) && y < (HEIGHT / 2)) {
      arc(x, y, r, r, HALF_PI, PI)
      arc(x, y + size, r, r, -HALF_PI, HALF_PI)
    } else {
      arc(x, y, r, r, PI, HALF_PI)
      arc(x, y + size, r, r, PI, PI)
    }
  }

  createCanvas(WIDTH, HEIGHT)
  background(colors[1])

  const N = 11
  const M = 11
  const size = WIDTH / N

  for (let i = COLOR_STEPS - 1; i > 0; i--) {
    const r = i * 30
    noStroke()
    fill(colors[i])
    circle(WIDTH / 2, HEIGHT / 2, r)
  }

  noFill()
  strokeWeight(40)
  stroke(colors[COLOR_STEPS - 1])
  for (let i = 0; i < N + 1; i++) {
    for (let j = 0; j < M; j++) {
      blockWave(size, i * size, j * size)
    }
  }

  noFill()
  stroke(colors[COLOR_STEPS - 1])
  strokeWeight(size / 2)
  square(size / 4, size / 4, WIDTH - (size / 2))
}