function setup() {
  //const COLORS = ["#e7c6ff","#c8b6ff","#b8c0ff","#bbd0ff"]
  //const COLORS = ["#8ecae6","#219ebc","#023047","#ffb703","#fb8500"]
  //const COLORS = ["#cbc0d3","#efd3d7","#feeafa","#dee2ff"]
  //const COLORS = ["#e9ecef","#dee2e6","#ced4da","#adb5bd","#6c757d"]
  const COLORS = ["#dad7cd", "#a3b18a", "#588157", "#3a5a40", "#344e41"]
  createCanvas(800, 800);

  let resolution = 0.002;
  let numPoints = 100;
  let numWaves = 1000;
  let noise_level = 10;

  background(COLORS[1])
  noFill();
  for (let i = -10; i < width + 200; i += 5) {
    for (let j = 0; j < height + 100; j += 10) {
      push()
      beginShape()
      strokeWeight(1)
      stroke(COLORS[int(random(0, COLORS.length - 1))])
      const angleX = random(1, 1.5)
      const angleY = random(1, 1.5)
      for (let k = 0; k < 10; k += 1) {
        //curveVertex(i+random(1,5), j+random(1,5))
        curveVertex(i + noise(k), j + noise(k))
        curveVertex(i + (k ** angleX), j - (k ** angleY))
      }
      endShape()
      pop()
    }
  }
}