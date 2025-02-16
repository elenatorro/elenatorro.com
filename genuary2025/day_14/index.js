function setup() {
  //const COLORS = ["#e7c6ff","#c8b6ff","#b8c0ff","#bbd0ff"]
  //const COLORS = ["#8ecae6","#219ebc","#023047","#ffb703","#fb8500"]
  //const COLORS = ["#cbc0d3","#efd3d7","#feeafa","#dee2ff"]
  //const COLORS = ["#e9ecef","#dee2e6","#ced4da","#adb5bd","#6c757d"]
  const COLORS = ["#000000", "#FFFFFF"]
  createCanvas(1600, 1600);
  background(COLORS[1])
  noFill();
  for (let i = -100; i < width - 300; i += 10) {
    for (let j = -100; j < height - 300; j += 10) {
      if ((i != j) || (j > height / 2)) {
        continue
      }
      const X = random(100, width - 100)
      const Y = random(100, height - 100)
      push()
      beginShape()
      translate(X, Y)
      strokeWeight(1)
      stroke(COLORS[int(random(0, COLORS.length - 1))])
      const angleX = random(1.2, 2.1)
      const angleY = random(1.5, 2)
      for (let k = 0; k < 12; k += 2) {
        curveVertex(i + random(1, 5), j - random(1, 5))
        curveVertex(i + (k ** angleX), j - (k ** angleY))
      }
      endShape(CLOSE)
      pop()

      push()
      beginShape()
      translate(X, Y)
      //translate(i, j)
      strokeWeight(5)
      stroke(COLORS[int(random(0, COLORS.length - 1))])
      for (let k = 0; k < 10; k += 1) {
        curveVertex(i - random(1, 2), j - random(1, 2))
        curveVertex(i - (k ** angleX), j - (k ** angleY))
      }
      endShape(CLOSE)
      pop()
    }
  }
}