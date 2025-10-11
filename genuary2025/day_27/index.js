const CM_TO_INCH = 2.54
const WIDTH_CM = 20
const HEIGHT_CM = 20
const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
const DPI = 300

const WIDTH = Math.round(WIDTH_INCHES * DPI)
const HEIGHT = Math.round(HEIGHT_INCHES * DPI)
const N = 10
const M = 10
const size = WIDTH / N

const COLOR_STEPS = 200

//const COLORS = ["#03071e","#370617","#6a040f","#9d0208","#d00000","#dc2f02","#e85d04","#f48c06","#faa307","#ffba08"]
let COLORS = ColorSteps.getColorSteps('#15616d', '#ff7d00', COLOR_STEPS)
//const COLORS = ["#006ba6", "#0496ff", "#ffbc42", "#d81159", "#8f2d56"]

let START = 7

function setup() {
  createCanvas(WIDTH, HEIGHT)
  background(COLORS[2])


  // for (let i = 0; i < HEIGHT / 10; i++) {
  //   textSize(82);
  //   const c = color(COLORS[i % (COLORS.length - 1)])
  //   c.setAlpha(90)
  //   fill(c);
  //   stroke(c);
  //   strokeWeight(3);
  //   text('happy birthday aitor', i * 5, i * 5);
  // }


  // for (let i = int(HEIGHT); i > 17; i--) {
  //   textSize(130);
  //   const c = color(COLORS[Math.abs(i) % (COLORS.length - 1)])
  //   c.setAlpha(150 - i)
  //   fill(c);
  //   stroke(c);
  //   strokeWeight(10);
  //   text('happy birthday aitor', i * 8, HEIGHT / 2 - i * 8);
  // }

  // let lastX = 0
  // let lastY = 0

  // for (let i = START + 25; i < int(HEIGHT / 15); i++) {
  //   textSize(130);
  //   const c = color(COLORS[Math.abs(i) % (COLORS.length - 1)])
  //   c.setAlpha(i - 20)
  //   fill(c);
  //   stroke(c);
  //   strokeWeight(10);
  //   lastX = i * 5
  //   lastY = HEIGHT / 2.75 + i * 5
  //   text('happy birthday aitor', lastX, lastY);
  // }

  stroke(COLORS[0])
  fill(COLORS[0])
  strokeWeight(5)
  //text('happy birthday aitor', lastX, lastY);
}

let i = 0;
let lastX = 0
let lastY = 0
let tick = 0
function draw() {
  tick++
  text('happy birthday aitor', lastX, lastY);

  if (tick <= 50) {
    text('happy birthday aitor', lastX, lastY);
    return
  } else {
  if (tick % 5 == 0) {
    i = i % 300
    i++
    textSize(130);
    const c = color(COLORS[Math.abs(i) % (COLORS.length - 1)])
    c.setAlpha(150 - i)
    fill(c);
    stroke(c);
    strokeWeight(10);
    text('happy birthday aitor', i * 8, HEIGHT / 2 - i * 8);

    //for (let i = START + 25; i < int(HEIGHT / 15); i++) {
      let j = i + 10
      textSize(130);
      const c1 = color(COLORS[Math.abs(j) % (COLORS.length - 1)])
      c1.setAlpha(j - 20)
      fill(c);
      stroke(c);
      strokeWeight(10);
      lastX = j * 5
      lastY = HEIGHT / 2.75 + j * 5
      text('happy birthday aitor', lastX, lastY);
    //}

      textSize(130);

      // let x = i + 50
      // const c2 = color(COLORS[2])
      // // c2.setAlpha(150 - x)
      // fill(c);
      // stroke(c);
      // strokeWeight(10);
      // text('happy birthday aitor', x * 8, HEIGHT / 2 - x * 8);

      if (i <= 1) {
        // background("#15616d")
        COLORS = COLORS.reverse()
      }
  }
}
}