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

    const N = 21
    const M = 21
    const RATIO = 15
    const size = ((WIDTH - MARGIN) / N)

    filter(BLUR, 3, false);
    const r = RATIO / 2
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if ((i % 3 != 0 && j % 3 == 0) || (i % 3 == 0 && j % 3 > 0)) {
                if (((i * size + MARGIN) + size * 2 <= WIDTH) && ((j * size + MARGIN) + size < HEIGHT)) {
                    noStroke()
                    fill(0)
                    rect((i * size + MARGIN) + (size / 2), j * size + MARGIN + (size / 2), size, size, RATIO)
                }
            } else {
                if (((i * size + MARGIN) + size * 2 <= WIDTH) && ((j * size - MARGIN) + size * 2 < HEIGHT)) {
                    noStroke()
                    fill(255)
                    rect((i * size + MARGIN) + (size / 2), j * size + MARGIN + (size / 2), size, size, RATIO)
                }
            }

            if ((i % 2 != 0 && j % 2 == 0) || (i % 2 == 0 && j % 2 > 0)) {
                fill('#f72585')
                stroke('#f72585')
                strokeWeight(2)
                rect(i * size + MARGIN, j * size + MARGIN, size, size, RATIO)
                fill('#4361ee')
                stroke('#4361ee')
                rect(i * size + MARGIN + r, j * size + MARGIN + r, size -r, size -r, RATIO)
            } else {
                fill('#3a0ca3')
                stroke('#3a0ca3')
                strokeWeight(2)
                rect(i * size + MARGIN, j * size + MARGIN, size, size, RATIO)
                fill('#7209b7')
                stroke('#7209b7')
                rect(i * size + MARGIN, j * size + MARGIN, size -r, size -r, RATIO)
            }

        }
    }
}