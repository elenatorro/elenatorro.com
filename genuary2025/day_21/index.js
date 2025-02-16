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

let i = 0
let j = 0

let dX = 'left'
let dY = 'bottom'

//const COLORS = ["#006ba6", "#0496ff", "#ffbc42", "#d81159", "#8f2d56"]
// const COLORS = ["#ffe5ec","#ffc2d1","#ffb3c6","#ff8fab","#fb6f92"]
const COLORS = ["#004b23","#006400","#007200","#008000","#38b000","#70e000","#9ef01a","#ccff33"]

function setup() {  
    createCanvas(WIDTH, HEIGHT)
    background(0)

    fill(255)
    strokeWeight(3)
    //rect(0, 0, WIDTH, HEIGHT)
}



function hexToRGB(hex) {
    hex = hex.replace('#', '')
    const bigint = parseInt(hex, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255

    return [r, g, b]
}

function draw() {
    noStroke()
    let v = int(random(1, 15))
    let radius = int(random(5, 5))
    const color = COLORS[i > 0 ? i % COLORS.length : 0]
    const rgb = hexToRGB(color)
    const pixel = get(i, j)

    if (pixel[0] == rgb[0] && pixel[1] == rgb[1] && pixel[2] == rgb[2]) {
        if (random(0, 1) > 0.5) {
            if (dX == 'left') {
                dX = 'right'
            } else {
                dX = 'left'
            }
        }

        if (random(0, 1) > 0.5) {
            if (dY == 'bottom') {
                dY = 'top'
            } else {
                dY = 'bottom'
            }
        }

        COLORS.reverse()
    }

    if (dX == 'left') {
        i += v + radius
    } else {
        i -= v + radius
    }

    if (dY == 'bottom') {
        j += v + radius
    } else {
        j -= v + radius
    }

    if (i > WIDTH - radius) {
        dX = 'right'
    }

    if (i < 0 + radius) {
        dX = 'left'
    }

    if (j > HEIGHT - radius / 2) {
        dY = 'top'
    }

    if (j < 0 + radius / 2) {
        dY = 'bottom'
    }
    
    fill(color)
    circle(i, j, radius)
}