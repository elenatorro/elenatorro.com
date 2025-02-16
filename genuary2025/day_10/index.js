function setup() {
  const WIDTH = TAU * TAU * TAU * TAU
  const HEIGHT = TAU * TAU * TAU * TAU
  const START = TAU - TAU
  const BASE = TAU / TAU
  const SIZE = TAU + TAU + TAU
  const COLORS = [
    "#AAAFFF",
    "#BBBFFF",
    "#CCCFFF",
    "#DDDFFF",
    "#EEEFFF",
    "#FFFAAA",
    "#FFFBBB",
    "#FFFCCC",
    "#FFFDDD",
    "#FFFEEE"
  ]

  createCanvas(WIDTH, HEIGHT)
  background(COLORS[START])
  noStroke()

  for (let i = START; i < WIDTH; i += SIZE) {
    push()
    rotate(radians(TAU * i))
    for (let j = START; j < HEIGHT; j += SIZE) {
      const a = parseInt((i + BASE) % (COLORS.length - BASE))
      const b = parseInt((j + BASE) % (COLORS.length - BASE))
      const c = parseInt((i + BASE + BASE) % (COLORS.length - BASE))
      fill(COLORS[c])
      circle(i, j, SIZE)
      fill(COLORS[a])
      circle(i + TAU, j - TAU, SIZE)
      fill(COLORS[b])
      circle(i - TAU, j + TAU, SIZE)
    }
    pop()
  }
}