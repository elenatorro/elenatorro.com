function setup() {
  const WIDTH = 800
  const HEIGHT = 800
  createCanvas(WIDTH * 2, HEIGHT * 2)

  const RADIUS = (WIDTH / 2)
  const LEVELS = 100
  const INNER = 100
  const POINTS = 10
  const COLORS = ["#0d3b66","#faf0ca","#f4d35e","#ee964b","#f95738"]

  background("#e5383b")

  noFill()
  push()
  translate(WIDTH, HEIGHT)
  beginShape()
  strokeWeight(8)
  for (let j = 0; j < LEVELS; j++) {
    const px1 = random(0, RADIUS - j * INNER)
    const py1 = RADIUS - j * INNER
    const p = POINTS
    const DEGREES = radians(360 / p)
    for (let i = 0; i < p; i++) {
      const r = RADIUS - j * INNER
      const deg = i * DEGREES
      const x = px1 + r * sin(deg)
      const y = py1 - r * (1 - cos(deg))
      //noStroke()
      //fill(COLORS[int(random(0, COLORS.length))])
      //stroke(COLORS[int(random(1, COLORS.length))])
      stroke("#8d0801")
      //circle(x, y, INNER)
      curveVertex(x, y)
    }
  }
  endShape()
  pop()
  noFill()
  strokeWeight(1)
  //circle(WIDTH / 2, HEIGHT / 2, WIDTH)
}
