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

  const N = 20
  const M = 20
  const SIZE = (WIDTH - MARGIN) / N

  class Tile {
    constructor(doors = '', roomSize, canBeEmpty) {
      this.doors = doors // NSEW
      this.roomSize = roomSize
      this.canBeEmpty = canBeEmpty
    }
  }

  //const backgroundColor = '#d1be9c'
  const backgroundColor = '#172005'
  const COLORS = ["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"]
  //const COLORS = ["2d9486","#172005","#9f4916","#6b754e","#0c7557","#ff0039","#1d3422","#4c261c","#a62a3c","#9c743f"]
  const lineColor = COLORS[1]
  const TILES = [...Array(N)].map(e => Array(M).fill(new Tile()))

  const drawTile = (x, y, tile, size) => {
    const tileSize = tile.roomSize > 0 ? size / tile.roomSize : 0
    const margin = tileSize * 0.9
    fill(backgroundColor)
    strokeWeight(1)
    stroke(COLORS[int(random(0, COLORS.length))])
    const centerX = x + (size / 2) - (margin / 2)
    const centerY = y + (size / 2) - (margin / 2)

    if (tileSize) {
      square(centerX, centerY, tileSize * 0.9, random(0, 20))
    }
  }

  const drawCorridor = (x, y, size) => {
    //stroke('#c1121f')
    stroke(lineColor)
    strokeWeight(1)
    const initX = x * size - size / 2
    const initY = y * size + size / 2
    const w = size / (N * 2)

    if (x > 0 && y < M - 1) {
      if (int(random(0, 2))) {
        circle(initX, initY, w * 2)
        circle(initX + size, initY, w * 2)

        beginShape()
        vertex(initX, initY - w, initX + size, initY - w)
        vertex(initX, initY + w, initX + size, initY + w)
        endShape(CLOSE)
        noFill()
      }

      if (int(random(0, 2))) {
        // left
        line(initX + w, initY, initX + w, initY + size)
        line(initX - w, initY, initX - w, initY + size)
        circle(initX, initY, w * 2)
        circle(initX, initY + size, w * 2)
      }

      if (int(random(0, 2))) {
        // bottom
        line(initX, initY + size - w, initX + size, initY + size - w)
        line(initX, initY + size + w, initX + size, initY + size + w)
        circle(initX, initY + size, w * 2)
        circle(initX + size, initY + size, w * 2)
      }

      if (int(random(0, 2))) {
        // right
        line(initX + size + w, initY, initX + size + w, initY + size)
        line(initX + size - w, initY, initX + size - w, initY + size)
        circle(initX + size, initY, w * 2)
        circle(initX + size, initY + size, w * 2)
      }
    }
  }

  fill(backgroundColor)
  rect(0, 0, WIDTH + MARGIN, HEIGHT + MARGIN)

  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= M; j++) {
      drawCorridor(i, j, SIZE)
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const roomSize = int(random(0, 4))
      TILES[i][j] = new Tile('', roomSize, true)
      drawTile(i * SIZE, j * SIZE, TILES[i][j], SIZE)
    }
  }

  noFill()
  strokeWeight(1)
  rect(1, 1, WIDTH + MARGIN - 1, HEIGHT + MARGIN - 1)
}
