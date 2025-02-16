function setup() {
  const WIDTH = 500
  const HEIGHT = 500
  createCanvas(WIDTH * 2, HEIGHT * 2)

  const RADIUS = (WIDTH / 2)
  const LEVELS = 20
  const INNER = 10
  const POINTS = 20
  const COLORS = ["#0d3b66", "#faf0ca", "#f4d35e", "#ee964b", "#f95738"]
  //const COLORS = ["#03071e", "#370617", "#6a040f", "#9d0208", "#d00000", "#dc2f02", "#e85d04", "#f48c06", "#faa307", "#ffba08"]

  background(COLORS[0])

  push()
  translate(WIDTH, HEIGHT)
  noFill()
  for (let j = 1; j < LEVELS; j++) {
    const px1 = 0
    const py1 = RADIUS - j * INNER
    const p = random(POINTS + j * (INNER / 1.5), POINTS - j * (INNER / 1.5))
    const DEGREES = radians(360 / p)
    for (let i = random(0, 1); i < p; i++) {
      const r = RADIUS - j * INNER
      const deg = i * DEGREES
      const x = px1 + r * sin(deg)
      const y = py1 - r * (1 - cos(deg))
      //noStroke()
      fill(COLORS[int(random(0, COLORS.length))])
      strokeWeight(1)
      stroke(COLORS[int(random(0, COLORS.length))])
      circle(x, y, INNER)
    }
  }
  pop()
  noFill()
  strokeWeight(1)
  //circle(WIDTH / 2, HEIGHT / 2, WIDTH)
}
