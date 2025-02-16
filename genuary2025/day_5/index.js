import * as THREE from 'three'
import {
  OrbitControls
} from 'orbitcontrols'

// Create a scene
const scene = new THREE.Scene()
const sphereGroup = new THREE.Group()
const colors = ["ef476f","ffd166","06d6a0","118ab2","073b4c"]

//const colors = ["2b2d42","8d99ae","edf2f4","ef233c","d80032"].reverse()
//const colors = ["0e7c7b","17bebb","d4f4dd","d62246","4b1d3f"].reverse()
//const colors = ["102542","f87060","cdd7d6","b3a394","ffffff"].reverse()
document.getElementById('exportBtn').addEventListener('click', () => {
    // Get the data URL of the canvas
    const canvas = document.getElementsByTagName('canvas')[0]
    const dataURL = canvas.toDataURL("image/png")
    
    // Open the data URL in a new tab
    const newTab = window.open()
    if (newTab) {
        newTab.document.body.innerHTML = `<img src="${dataURL}" alt="Canvas Image"/>`
    }
})

// Create a renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    preserveDrawingBuffer: true,
})
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
const BG = `#${colors[0]}`
const LG = `#${colors[1]}`
scene.background = new THREE.Color(LG)

const materialOptions = {
    color: LG,
    specular: LG, // Specular highlights color
    shininess: 90, // Shininess of the material (higher = shinier)
    map: null, // No texture map
    lightMap: null, // No additional lighting map
    aoMap: null, // No ambient occlusion map
    emissive: LG, // No emissive glow
    emissiveIntensity: 0, // Default emissive intensity
    emissiveMap: null, // No emissive map
    bumpMap: null, // No bump map
    bumpScale: 1, // Default bump map scale
    normalMap: null, // No normal map
    normalMapType: THREE.TangentSpaceNormalMap, // Default normal map type
    normalScale: new THREE.Vector2(1, 1), // Default normal map scale
    displacementMap: null, // No displacement map
    displacementScale: 1, // Default displacement scale
    displacementBias: 0, // Default displacement bias
    specularMap: null, // No specular map
    alphaMap: null, // No alpha map
    envMap: null, // No environment map
    flatShading: false,
    combine: THREE.MixOperation, // Default combine operation
    reflectivity: 0.3,
    transparent: true, // Material is not transparent
    opacity: 0.75 // Fully opaque
}

function createRandomSpheres(scene, count) {
    const geometry = new THREE.BoxGeometry(10, 10, 10) // Base geometry for spheres
    const max = count / 3

    for (let i = -max; i < max; i++) {
        for (let j = -max; j < max; j++) {
            for (let z = -max; z < max; z++) {
                const material = new THREE.MeshPhongMaterial(materialOptions) // Default material for spheres
                const sphere = new THREE.Mesh(geometry, material)
                const scale = 0.1 * z + 0.1 * j + 0.1 * i
                sphere.material.color.set(`#${colors[(i * j * z) % colors.length]}`)
                //sphere.scale.set(scale, scale, scale)
                sphere.position.set(i * 5, j * 5, z * 5)
                // sphere.position.set(
                //     (Math.random() - 0.5) * 50,
                //     (Math.random() - 0.5) * 50,
                //     (Math.random() - 0.5) * 50
                // )
                //scene.add(sphere)
                sphereGroup.add(sphere)
            }
        }
    }
    sphereGroup.position.set(0, 0, 0)
    scene.add(sphereGroup)
}
createRandomSpheres(scene, 30)

// Create a camera
// const camera = new THREE.PerspectiveCamera(
//     100, // Field of view
//     window.innerWidth / window.innerHeight, // Aspect ratio
//     10, // Near clipping plane
//     2000 // Far clipping plane
// )
// camera.position.set(700, 700, 700)
// camera.lookAt(scene.position)
// camera.rotation.y = - Math.PI / 4
// camera.rotation.x = Math.atan( - 1 / Math.sqrt( 2 ) )
// camera.zoom = 10
const aspect = window.innerWidth / window.innerHeight
const d = 2000
const camera = new THREE.OrthographicCamera(
    - d * aspect, d * aspect, d, - d, 0, 2000
)
camera.zoom = 15
camera.position.set( 700, 700, 700 ) // all components equal
camera.lookAt( scene.position ) // or the origin

camera.updateProjectionMatrix()
// Add a light source
const dl = new THREE.DirectionalLight(0xa2d2ff, 1, 100)
dl.position.set(10, 0.5, 10)
scene.add(dl)

const dl2 = new THREE.DirectionalLight(0xa2d2ff, 1, 10)
dl2.position.set(-1, 5, -1)
scene.add(dl2)

const dl3 = new THREE.DirectionalLight(0xa2d2ff, 1, 1)
dl3.position.set(-1, 1, 10)
scene.add(dl3)

// const light = new THREE.PointLight(0xa2d2ff, 1, 100)
// light.position.set(20, 10, 20)
// scene.add(light)

renderer.render(scene, camera)

// Handle window resizing
// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true // Smooth movement
controls.dampingFactor = 0.05 // Damping factor
controls.update()

function animate() {
    requestAnimationFrame( animate )
    // required if controls.enableDamping or controls.autoRotate are set to true
    // sphereGroup.rotation.y += 0.005
    controls.update()
    renderer.render( scene, camera )
}

// Handle window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
})

animate()