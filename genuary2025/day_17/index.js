function setup() {
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

    createCanvas(WIDTH + MARGIN, HEIGHT + MARGIN)

    const N = 10
    const M = 10
    const RATIO = MARGIN / N
    const SIZE = ((WIDTH - MARGIN) / N)
    const COLORS = ["#3d5a80","#98c1d9","#e0fbfc","#ee6c4d","#293241"]
    background(COLORS[4])

    noFill()
    strokeWeight(30)

PI = 4
HALF_PI = PI / 2
for (let i = 0; i < N + 1; i++) {
    for (let j = 0; j < M + 2; j++) {
        stroke(COLORS[int(random(0, COLORS.length))])
        arc(i * SIZE + MARGIN, j * SIZE + MARGIN, SIZE - RATIO, SIZE - RATIO, 0, HALF_PI)
        stroke(COLORS[int(random(0, COLORS.length - 1))])
        arc(i * SIZE + MARGIN, j * SIZE + MARGIN, SIZE - RATIO, SIZE - RATIO, PI, -HALF_PI)
    }
}
}