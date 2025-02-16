function setup() {
  const CM_TO_INCH = 2.54
  const WIDTH_CM = 20
  const HEIGHT_CM = 20
  const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
  const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
  const DPI = 300

  const WIDTH = Math.round(WIDTH_INCHES * DPI)
  const HEIGHT = Math.round(HEIGHT_INCHES * DPI)

  const COLOR_STEPS = 200

  //const COLORS = ["#03071e","#370617","#6a040f","#9d0208","#d00000","#dc2f02","#e85d04","#f48c06","#faa307","#ffba08"]
  const COLORS = ColorSteps.getColorSteps('#15616d', '#ff7d00', COLOR_STEPS)
  //const COLORS = ["#006ba6", "#0496ff", "#ffbc42", "#d81159", "#8f2d56"]

  createCanvas(WIDTH, HEIGHT)
  background(COLORS[2])

  const N = 10
  const M = 10
  const size = WIDTH / N

  // for (let i = 0; i < HEIGHT / 10; i++) {
  //   textSize(82);
  //   const c = color(COLORS[i % (COLORS.length - 1)])
  //   c.setAlpha(90)
  //   fill(c);
  //   stroke(c);
  //   strokeWeight(3);
  //   text('movement is life', i * 5, i * 5);
  // }

  let START = 7

  for (let i = int(HEIGHT); i > 17; i--) {
    textSize(130);
    const c = color(COLORS[Math.abs(i) % (COLORS.length - 1)])
    c.setAlpha(150 - i)
    fill(c);
    stroke(c);
    strokeWeight(10);
    text('movement is life', i * 8, HEIGHT / 2 - i * 8);
  }

  let lastX = 0
  let lastY = 0

  for (let i = START + 25; i < int(HEIGHT / 15); i++) {
    textSize(130);
    const c = color(COLORS[Math.abs(i) % (COLORS.length - 1)])
    c.setAlpha(i - 20)
    fill(c);
    stroke(c);
    strokeWeight(10);
    lastX = i * 5
    lastY = HEIGHT / 2.75 + i * 5
    text('movement is life', lastX, lastY);
  }

  stroke(COLORS[0])
  fill(COLORS[0])
  strokeWeight(5)
  text('movement is life', lastX, lastY);
}