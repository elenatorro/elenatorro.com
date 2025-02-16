const CM_TO_INCH = 2.54
const WIDTH_CM = 10
const HEIGHT_CM = 10
const MARGIN_CM = 0.5
const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
const MARGIN_INCHES = MARGIN_CM / CM_TO_INCH
const DPI = 300

//const colors = ["#001524","#15616d","#ffecd1","#ff7d00","#78290f"]
const COLORS = ["#f94144","#f3722c","#f8961e","#f9844a","#f9c74f","#90be6d","#43aa8b","#4d908e","#577590","#277da1"]

//const COLORS = ["#0466c8","#0353a4","#023e7d","#002855","#001845","#001233","#33415c","#5c677d","#7d8597","#979dac"]
const WIDTH = Math.round(WIDTH_INCHES * DPI)
const HEIGHT = Math.round(HEIGHT_INCHES * DPI)
const MARGIN = Math.round(MARGIN_INCHES * DPI)
const N = 10
const M = 10
const size = WIDTH / N
//const COLORS = ["#9fffcb", "#25a18e", "#7ae582"]
//const COLORS = ["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"]

class Node {
  constructor(x, y, parent, graph) {
    this.x = x
    this.y = y
    this.parent = parent
    this.children = []
    this.graph = graph
  }

  updateCoords(x, y) {
    this.x = x
    this.y = y
  }

  addChildren(min = 0, max = 3) {
    const NUM_CHILDREN = int(random(min, max))

    if (this.graph.depth <= 0) {
      return
    }

    this.graph.decreaseDepth()
    for (let i = 0; i < NUM_CHILDREN; i++) {
      const node = new Node(0, 0, this, this.graph)
      this.children.push(node)
      this.graph.addNode(node)
      node.addChildren(min, max)
    }
  }
}

class Graph {
  constructor(depth, color) {
    this.depth = depth
    this.color = color
    this.nodes = []
  }

  decreaseDepth() {
    this.depth = this.depth - 1
  }

  addNode(node) {
    this.nodes.push(node)
  }

  getRandomNode() {
    return this.nodes[int(random(0, this.nodes.length))]
  }

  drawCircles() {
    this.nodes.forEach((node) => {
      fill(this.color)
      noStroke()
      circle(node.x, node.y, 20)
    })
  }
}

function createGraph(depth, x1, x2, y1, y2, color, min, max, root) {
  const graph = new Graph(depth, color)
  if (!root) {
    root = new Node(0, 0, null, graph)
  }
  graph.addNode(root)
  root.addChildren(min, max)

  // 1. Set positions
  graph.nodes.forEach((node) => {
    const x = random(x1, x2)
    const y = random(y1, y2)
    node.updateCoords(x, y)
    noStroke()
  })

  // 2. Draw lines
  graph.nodes.forEach((node) => {
    node.children.forEach((child) => {
      stroke(color)
      strokeWeight(random(1, 8)) 
      line(node.x, node.y, child.x, child.y)
    })
  })

  return graph
}

function setup() {
  createCanvas(WIDTH + MARGIN, HEIGHT + MARGIN)
  background("#faedcd")
  const graph1 = createGraph(3, MARGIN, WIDTH, MARGIN, HEIGHT -MARGIN, COLORS[1], 1, 3)
  const graph2 = createGraph(4, WIDTH/3, WIDTH, MARGIN, HEIGHT / 3, COLORS[2], 1, 8, graph1.getRandomNode())
  const graph3 = createGraph(6, MARGIN, WIDTH/6, MARGIN, HEIGHT/2, COLORS[5], 5, 9, graph2.getRandomNode())
  const graph6 = createGraph(3, WIDTH/2, WIDTH, HEIGHT/2, MARGIN, COLORS[9], 1, 4)
  const graph4 = createGraph(5, WIDTH/3, WIDTH, MARGIN, HEIGHT / 3, COLORS[0], 1, 9, graph2.getRandomNode())
  const graph5 = createGraph(8, WIDTH/2, WIDTH, HEIGHT/2, HEIGHT, COLORS[4], 2, 5, graph3.getRandomNode())
  

  graph6.drawCircles()
  graph5.drawCircles()
  graph4.drawCircles()
  graph3.drawCircles()
  graph2.drawCircles()
  graph1.drawCircles()
}