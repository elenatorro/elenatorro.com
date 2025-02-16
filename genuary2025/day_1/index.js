function setup() {
  createCanvas(600, 600)
  let inc = 0.25

  strokeWeight(0.5)
  noFill()
  const colors = [
    "#171616", "#131011", "#383333", "#9c9593", "#1d1b1d"
  ]

  background(colors[3])
  for (let i = -10; i <= height + 100; i += inc) {
    const init = random(0, width / 2)
    const end = random(width / 2, width)

    stroke(colors[2])
    beginShape()
    for (let j = 0; j <= init; j += 1) {
      curveVertex(j, i)
    }
    endShape()

    stroke(colors[3])
    beginShape()
    for (let j = init; j <= end; j += 1) {
      curveVertex(j, i)
    }
    endShape()

    stroke(colors[3])
    beginShape()
    for (let j = end; j <= width; j += 1) {
      curveVertex(j, i)
    }
    endShape()
  }

  for (let j = -10; j < width; j += inc) {
    const init = random(0, height / 2)
    const end = random(height / 2, height)

    stroke(colors[2])
    beginShape()
    for (let i = 0; i <= init; i += 1) {
      curveVertex(j, i)
    }
    endShape()

    stroke(colors[4])
    beginShape()
    for (let i = end; i <= height; i += 1) {
      curveVertex(j, i)
    }
    endShape()
  }
  noFill()
  stroke(colors[2])
  strokeWeight(10)
  square(0, 0, 600)
}