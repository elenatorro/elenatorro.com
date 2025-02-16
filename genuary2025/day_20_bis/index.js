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

  const N = 30
  const M = 30
  const SIZE = (WIDTH - MARGIN) / N

  class Room {
    constructor(roomWidth, roomHeight, doors = '') {
      this.roomWidth = roomWidth
      this.roomHeight = roomHeight
      this.doors = doors // NSEW
    }
  }

  class Tile {
    constructor(i, j, shape) {
      this.i = i
      this.j = j
      this.shape = shape
      this.room = null
    }

    addRoom(room) {
      this.room = room
    }
  }

  const TILES = [...Array(N)].map(e => Array(M).fill(new Tile()))

  fill(255)
  rect(0, 0, WIDTH + MARGIN, HEIGHT + MARGIN)

  const TOTAL = N * M
  const MAX_ROOM_TILES = int(TOTAL / 2)
  const MAX_SIDE = int(N / 3)
  const rooms = []
  let currentRoomTiles = 0

  while (currentRoomTiles < MAX_ROOM_TILES) {
    const roomWidth = int(random(1, MAX_SIDE + 1))
    const roomHeight = int(random(1, MAX_SIDE + 1))
    const room = new Room(roomWidth, roomHeight)
    rooms.push(room)
    currentRoomTiles += roomWidth * roomHeight
  }

  const addRoom = (i, j, room) => {
    for (let x = i; x < i + room.roomWidth; x++) {
      for (let y = j; y < j + room.roomHeight; y++) {
        TILES[x][y].addRoom(room)
      }
    }

    strokeWeight(2)
    beginShape()
    const initX = i * SIZE
    const initY = j * SIZE
    vertex(initX, initY, initX + SIZE, initY)
    vertex(initX, initY, initX, initY + SIZE)
    vertex(initX, initY + SIZE, initX + SIZE, initY + SIZE)
    vertex(initX + SIZE, initY, initX + SIZE, initY + SIZE)
    endShape(CLOSE)
  }

  const getRoomPosition = (room) => {
    const roomSize = room.roomWidth * room.roomHeight
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        let currentTiles = 0
        if (i + room.roomWidth > N || j + room.roomHeight > M) {
          continue
        }
        for (let x = i; x < i + room.roomWidth; x++) {
          for (let y = j; y < j + room.roomHeight; y++) {
            try {
              if (TILES[x][y].room) {
                currentTiles = 0
              } else {
                currentTiles += 1
              }
            } catch {
              currentTiles = 0
            }

            if (currentTiles == roomSize) {
              return [i, j]
            }
          }
        }
      }
    }

    return false
  }

  for (let r = 0; r < rooms.length; r++) {
    const room = rooms[r]
    const pos = getRoomPosition(room)
    if (pos) {
      addRoom(pos[0], pos[1], room)
    }
  }

  // noFill()
  // strokeWeight(1)
  // rect(0, 0, WIDTH + MARGIN, HEIGHT + MARGIN)
}
