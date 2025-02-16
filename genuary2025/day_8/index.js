const CM_TO_INCH = 2.54
const WIDTH_CM = 10
const HEIGHT_CM = 10
const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
const DPI = 300
const WIDTH = Math.round(WIDTH_INCHES * DPI)
const HEIGHT = Math.round(HEIGHT_INCHES * DPI)
// const COLORS = ["#006ba6", "#0496ff", "#ffbc42", "#d81159", "#8f2d56"]
// const COLORS = ["#ff9f1c","#ffbf69","#ffffff","#cbf3f0","#2ec4b6"]
// const COLORS = ["#fec5bb","#fcd5ce","#fae1dd","#f8edeb","#e8e8e4","#d8e2dc","#ece4db","#ffe5d9","#ffd7ba","#fec89a"]
const COLORS = ["#03071e", "#370617", "#6a040f", "#9d0208", "#d00000", "#dc2f02", "#e85d04", "#f48c06", "#faa307", "#ffba08"]
// const COLORS = ["000000","#14213d","#fca311","#e5e5e5","#ffffff"]
const BACKGROUND_COLOR = "#2ec4b6"

function setup() {
  createCanvas(WIDTH, HEIGHT)
  background(BACKGROUND_COLOR)
  fill(BACKGROUND_COLOR)
  noStroke()

  for (let i = 0; i < WIDTH * HEIGHT; i += 5) {
    const y = floor(i / WIDTH)
    const x = i % HEIGHT
    for (let z = 0; z < 5; z++) {
      const c = color(COLORS[floor(random(0, COLORS.length - 1))])
      c.setAlpha(128)
      fill(c)
      square(y + 0.7 * z, x + 0.7 * z, 0.5)
    }
  }
}