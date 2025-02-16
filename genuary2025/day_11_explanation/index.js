import * as THREE from 'three'
import {
  CSG
} from 'csgmesh'
import {
  OrbitControls
} from 'orbitcontrols'

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x2c2a4a);

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const hemiLight = new THREE.HemisphereLight(0x560bad, 0xffffff, 0.6);
hemiLight.position.set(0, 500, 0);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0x560bad, 1);
dirLight.position.set(10, 0.75, 1);
dirLight.position.multiplyScalar(50);
dirLight.name = "dirlight";
dirLight.shadowCameraVisible = true;

scene.add(dirLight);

dirLight.castShadow = true;
dirLight.shadowMapWidth = dirLight.shadowMapHeight = 1024 * 2;

const d = 300;

dirLight.shadowCameraLeft = -d;
dirLight.shadowCameraRight = d;
dirLight.shadowCameraTop = d;
dirLight.shadowCameraBottom = -d;

dirLight.shadowCameraFar = 3500;
dirLight.shadowBias = -0.0001;
dirLight.shadowDarkness = 0.35;

const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.3, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

const removeWindow = (buildingCSG, windowsCSG) => {
  if (!windowsCSG.length) {
    return buildingCSG
  }

  const newBuildingCSG = buildingCSG.subtract(windowsCSG.pop())
  return removeWindow(newBuildingCSG, windowsCSG)
}

const COLORS_A = [0x161925, 0x23395b, 0x8ea8c3]
const COLORS_B = [0x735d78, 0xb392ac, 0xd1b3c4]
const COLORS_C = [0x735751, 0xa78a7f, 0xe7d7c1]

const buildingColors = [COLORS_A, COLORS_B, COLORS_C]

const addBuilding = (buildingX = 10, buildingY = 12, buildingZ = 8, sideARows = 3, sideAColumns = 3, sideBRows = 3,
  sideBColumns = 2, colors = COLORS_A, debug = false) => {
  const buildingGroup = new THREE.Group()

  const BUILDING_X = buildingX
  const BUILDING_Y = buildingY
  const BUILDING_Z = buildingZ
  const X = BUILDING_X / 2
  const Y = BUILDING_Y / 2
  const Z = BUILDING_Z / 2

  const buildingMesh = new THREE.Mesh(
    new THREE.BoxGeometry(BUILDING_X, BUILDING_Y, BUILDING_Z),
    new THREE.MeshStandardMaterial({
      color: colors[0],
      transparent: false,
      wireframe: false,
      opacity: 0.7
    })
  )
  buildingMesh.position.set(X, Y, Z)
  buildingMesh.updateMatrixWorld()
  // explain
  //buildingGroup.add(buildingMesh)
  const buildingCSG = CSG.fromMesh(buildingMesh, 0)

  const materials = [
    buildingMesh.material
  ]

  const buildingInnerMesh = new THREE.Mesh(
    new THREE.BoxGeometry(BUILDING_X - 1, BUILDING_Y - 1, BUILDING_Z - 1),
    new THREE.MeshStandardMaterial({
      color: colors[1],
      transparent: true,
      wireframe: false,
      opacity: 0.5
    })
  )
  buildingInnerMesh.position.set(X, Y, Z)
  buildingInnerMesh.updateMatrixWorld()
  const buildingInnerCSG = CSG.fromMesh(buildingInnerMesh, 0)
  buildingGroup.add(buildingInnerMesh)

  // SIDE A WINDOWS
  const WINDOW_ROWS = sideARows
  const WINDOW_COLUMNS = sideAColumns
  const windowsCSGs = []
  const WINDOW_WIDTH = BUILDING_X / (WINDOW_ROWS * 2 + 1)
  const WINDOW_HEIGHT = BUILDING_Y / (WINDOW_COLUMNS * 2 + 1)

  for (let i = 0; i < WINDOW_ROWS; i++) {
    for (let j = 0; j < WINDOW_COLUMNS; j++) {
      const windowsMesh = new THREE.Mesh(
        new THREE.BoxGeometry(WINDOW_WIDTH, WINDOW_HEIGHT, BUILDING_Z),
        new THREE.MeshStandardMaterial({
          color: colors[2],
          transparent: false,
          wireframe: false,
          opacity: 0.7
        })
      )

      windowsMesh.position.set(WINDOW_WIDTH + WINDOW_WIDTH / 2 + (2 * WINDOW_WIDTH * i), WINDOW_HEIGHT +
        WINDOW_HEIGHT / 2 + (2 * WINDOW_HEIGHT * j), BUILDING_Z / 2)
      windowsMesh.updateMatrixWorld()
      // explain
      buildingGroup.add(windowsMesh)
      materials.push(windowsMesh.material)
      const windowsCSG = CSG.fromMesh(windowsMesh, i + j + 1)
      windowsCSGs.push(windowsCSG)
    }
  }

  // SIDE B WINDOWS
  const WINDOW_B_ROWS = sideBRows
  const WINDOW_B_COLUMNS = sideBColumns
  const WINDOW_B_WIDTH = BUILDING_Z / (WINDOW_B_COLUMNS * 2 + 1)
  const WINDOW_B_HEIGHT = BUILDING_Y / (WINDOW_B_ROWS * 2 + 1)

  for (let i = 0; i < WINDOW_B_ROWS; i++) {
    for (let j = 0; j < WINDOW_B_COLUMNS; j++) {
      const windowsMesh = new THREE.Mesh(
        new THREE.BoxGeometry(BUILDING_X, WINDOW_B_HEIGHT, WINDOW_B_WIDTH),
        new THREE.MeshStandardMaterial({
          color: 0xffbf00,
          transparent: true,
          wireframe: false,
          opacity: 0.7
        })
      )

      windowsMesh.position.set(BUILDING_X / 2, WINDOW_B_HEIGHT + WINDOW_B_HEIGHT / 2 + (2 * WINDOW_B_HEIGHT * i),
        WINDOW_B_WIDTH + WINDOW_B_WIDTH / 2 + (2 * WINDOW_B_WIDTH * j))
      windowsMesh.updateMatrixWorld()
      //explain
      buildingGroup.add(windowsMesh)
      materials.push(windowsMesh.material)
      const windowsCSG = CSG.fromMesh(windowsMesh, i + j + 1)
      windowsCSGs.push(windowsCSG)
    }
  }

  // explain
  const buildingIntersectCSG = removeWindow(buildingCSG, windowsCSGs)
  const buildingIntersectMesh = CSG.toMesh(buildingIntersectCSG, new THREE.Matrix4(), materials)
  buildingGroup.add(buildingIntersectMesh)
  scene.add(buildingGroup)
  return buildingGroup
}

const BUILDINGS_X = 1
const BUILDINGS_Y = 1
const BUILDING_BASE_X = 20
const BUILDING_BASE_Z = 24
const BUILDING_BASE_Y = 12

camera.position.set(150, 200, 150)
camera.zoom = 2
camera.updateProjectionMatrix()

for (let i = 0; i < BUILDINGS_X; i++) {
  for (let j = 0; j < BUILDINGS_Y; j++) {
    const B_WIDTH = getRandomNumber(10, 10)
    const B_HEIGHT = getRandomNumber(15, 15)
    const B_DEPTH = getRandomNumber(8, 8)
    const B_SIDE_A_ROWS = getRandomNumber(3, 3)
    const B_SIDE_A_COLUMNS = getRandomNumber(6, 6)
    const B_SIDE_B_ROWS = getRandomNumber(3, 3)
    const B_SIDE_B_COLUMNS = getRandomNumber(3, 3)
    const c = getRandomNumber(3, 3)
    const buildingColor = buildingColors[c]
    const building = addBuilding(B_WIDTH, B_HEIGHT, B_DEPTH, B_SIDE_A_ROWS, B_SIDE_A_COLUMNS, B_SIDE_B_ROWS,
      B_SIDE_B_COLUMNS, buildingColor)
    const DELAY = getRandomNumber(0, 0)
    building.position.set(BUILDING_BASE_X * i + BUILDINGS_X * 2, 0, BUILDING_BASE_Y * j * 2 + DELAY)
  }
}

const floor = new THREE.Mesh(
  new THREE.BoxGeometry(BUILDINGS_X * BUILDING_BASE_X, 1, BUILDINGS_Y * BUILDING_BASE_Y * 2 * 1.2),
  new THREE.MeshStandardMaterial({
    color: 0x161925
  })
)
floor.position.set(BUILDING_BASE_X * 6, 0, BUILDING_BASE_Z * 6)
floor.updateMatrixWorld()
scene.add(floor)

window.addEventListener('resize', onWindowResize, false)

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  render()
}

function animate() {
  requestAnimationFrame(animate)
  controls.update()
  render()
}

function render() {
  renderer.render(scene, camera)
}

animate()

document.getElementById('exportBtn').addEventListener('click', () => {
  // Get the data URL of the canvas
  const canvas = document.getElementsByTagName('canvas')[0];
  onWindowResize()
  const dataURL = canvas.toDataURL("image/png");
  console.log(dataURL)

  // Open the data URL in a new tab
  const newTab = window.open();
  if (newTab) {
    newTab.document.body.innerHTML = `<img src="${dataURL}" alt="Canvas Image"/>`;
  }
});
