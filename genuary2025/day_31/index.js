const CM_TO_INCH = 2.54
const WIDTH_CM = 15
const HEIGHT_CM = 15
const MARGIN_CM = 0.5
const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
const MARGIN_INCHES = MARGIN_CM / CM_TO_INCH
const DPI = 300

//const COLORS = ["#f94144","#f3722c","#f8961e","#f9844a","#f9c74f","#90be6d","#43aa8b","#4d908e","#577590","#277da1"]
// const COLORS = ["#10002b","#240046","#3c096c","#5a189a","#7b2cbf","#9d4edd","#c77dff","#e0aaff"].reverse()
const COLORS = ["#7400b8", "#6930c3", "#5e60ce", "#5390d9", "#4ea8de", "#48bfe3", "#56cfe1", "#64dfdf", "#72efdd", "#80ffdb"]
const WIDTH = Math.round(WIDTH_INCHES * DPI)
const HEIGHT = Math.round(HEIGHT_INCHES * DPI)
const MARGIN = Math.round(MARGIN_INCHES * DPI)
const N = 10
const M = 10
const size = WIDTH / N
const results = []

function merge(left, right, i, j, size) {
  let resultArray = [], leftIndex = 0, rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          resultArray.push(left[leftIndex])
          leftIndex+=1
      } else {
          resultArray.push(right[rightIndex])
          rightIndex+=1
      }
  }

  const result = resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex))

  drawPixelArray(result, i, HEIGHT - j, size, 'n')
  return result
}

function mergeSort(arr, i, j, size, d) {
  drawPixelArray(arr, i, j, size, d)

  if (arr.length === 1) {
      return arr
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(
      mergeSort(left,  i, j + size * 2.75, size, 'l'),
      mergeSort(right, i + size * arr.length, j + size * 2.75, size, 'r'),
      i,
      j,
      size
  )
}

function drawPixelArray(arr, i, j, size, d = 'r') {
  textSize(size / 2)
  const start = size * int(arr.length / 2)
  arr.forEach((p, index) => {
    stroke(255)
    strokeWeight(10)
    fill(COLORS[p-1])
    square(start + i + index * size, j - (p * p / 2), p * p + size)
    //fill('white')
    //text(`${p}${d}`, start + i + index * size, j + size)
  })
}

function setup() {
  createCanvas(WIDTH + MARGIN, HEIGHT + MARGIN)
  background("#94d2bd")
  //background("#f5dfbb")
  const arr = [7, 2, 8, 1, 3, 6, 4, 5]
  const size = 10 * arr.length
  mergeSort(arr, WIDTH / 2 - (arr.length * size), MARGIN * 3.5, size, 'r')
}