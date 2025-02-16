const CM_TO_INCH = 2.54
const WIDTH_CM = 10
const HEIGHT_CM = 10
const MARGIN_CM = 0.1
const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
const MARGIN_INCHES = MARGIN_CM / CM_TO_INCH
const DPI = 300

const WIDTH = Math.round(WIDTH_INCHES * DPI)
const HEIGHT = Math.round(HEIGHT_INCHES * DPI)
const MARGIN = Math.round(MARGIN_INCHES * DPI)

const NUMDROPS = 10
const BLOCKS = 0
const GRADIENT = 150

const colors = ColorSteps.getColorSteps('#001233', '#edede9', GRADIENT)
const colorBlocks = ColorSteps.getColorSteps('#e0e1dd', '#415a77', 100)
const colorBG = ColorSteps.getColorSteps('#d9ed92', '#34a0a4', 10)

const DROPCOLORS = []

function irregularEllipse(x, y, diameter) {
    push();
    translate(x, y);
    beginShape();
    const d = diameter + random(1, 10)

    for (let i = 0; i < 360; i += 45) {
      let rad = radians(i);
      
      let x = (d/2) * cos(rad);
      let y = (d/2) * sin(rad);
      
      curveVertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }

function setup() {
    createCanvas(WIDTH, HEIGHT)
    noStroke()
    fill('#e3d5ca')
    rect(0, 0, WIDTH, HEIGHT)

    for (let j = 0; j < colorBlocks.length; j++) {
        const c = color(colorBlocks[j])
        fill(c)
        square(0, j * 10, WIDTH)
    }

    for (let i = 0; i < 10; i++) {
        const initX = int(random(-10, WIDTH + 10))
        const initY = int(random(-10, HEIGHT + 10))

        const diameter = random(100, 500)
        for (let j = 0; j < colorBG.length; j++) {
            const c = color(colorBG[j])
            c.setAlpha(1)
            fill(c)
            irregularEllipse(initX, initY+j, diameter - j)
        }
    }

    colorBG.reverse()
    for (let i = 0; i < 10; i++) {
        const initX = int(random(-10, WIDTH + 10))
        const initY = int(random(-10, HEIGHT + 10))

        const diameter = random(50, 100)
        
        for (let j = 0; j < colorBG.length; j++) {
            const c = color(colorBG[j])
            c.setAlpha(5)
            fill(c)
            irregularEllipse(initX, initY+j, diameter - j)
        }
    }

    for (let i = 0; i < NUMDROPS; i++) {
        const initX = int(random(10, WIDTH - 10))
        const initY = int(random(10, HEIGHT - 10))

        const diameter = random(10, 50)
        for (let j = 0; j < colors.length; j++) {
            const c = color(colors[j])
            c.setAlpha(5)
            fill(c)
            irregularEllipse(initX, initY+j, diameter - j)
        }
    }
}
