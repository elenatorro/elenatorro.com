import * as THREE from 'three'
import {
  OrbitControls
} from 'orbitcontrols'

// Create a scene
const scene = new THREE.Scene();
const sphereGroup = new THREE.Group();

// Create a camera
const camera = new THREE.PerspectiveCamera(
    75, // Field of view
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.5, // Near clipping plane
    1000 // Far clipping plane
);
camera.position.z = 30;
camera.position.x = 90;
camera.position.y = 90;
camera.zoom = 1
camera.updateProjectionMatrix()
const colors = ["ef476f","ffd166","06d6a0","118ab2","073b4c"]

document.getElementById('exportBtn').addEventListener('click', () => {
    // Get the data URL of the canvas
    const canvas = document.getElementsByTagName('canvas')[0];
    const dataURL = canvas.toDataURL("image/png");
    
    // Open the data URL in a new tab
    const newTab = window.open();
    if (newTab) {
        newTab.document.body.innerHTML = `<img src="${dataURL}" alt="Canvas Image"/>`;
    }
});

// Create a renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    preserveDrawingBuffer: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
scene.background = new THREE.Color(0xffb703);

const materialOptions = {
    color: 0x000000,
    specular: 0xffafcc, // Specular highlights color
    shininess: 90, // Shininess of the material (higher = shinier)
    map: null, // No texture map
    lightMap: null, // No additional lighting map
    aoMap: null, // No ambient occlusion map
    emissive: 0xffafcc, // No emissive glow
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
    reflectivity: 1,
    transparent: false, // Material is not transparent
    opacity: 1 // Fully opaque
};

function createRandomSpheres(scene, count) {
    const geometry = new THREE.SphereGeometry(1, 32, 32); // Base geometry for spheres
    const max = count / 3

    for (let i = -max; i < max; i++) {
        for (let j = -max; j < max; j++) {
            for (let z = -max; z < max; z++) {
                const material = new THREE.MeshPhongMaterial(materialOptions); // Default material for spheres
                const sphere = new THREE.Mesh(geometry, material);
                const scale = 0.1 * z + 0.1 * j + 0.1 * i;
                //sphere.material.color.set(`#${colors[(i * j * z) % colors.length]}`)
                sphere.scale.set(scale, scale, scale);
                sphere.position.set(i * 5, j * 5, z * 5);
                // sphere.position.set(
                //     (Math.random() - 0.5) * 50,
                //     (Math.random() - 0.5) * 50,
                //     (Math.random() - 0.5) * 50
                // );
                //scene.add(sphere);
                sphereGroup.add(sphere);
            }
        }
    }
    scene.add(sphereGroup);
}
createRandomSpheres(scene, 30);
// Add a light source
const dl = new THREE.DirectionalLight(0xa2d2ff, 1, 100);
dl.position.set(1, 0.5, 1);
//scene.add(dl);

const dl2 = new THREE.DirectionalLight(0xa2d2ff, 10, 10);
dl2.position.set(-1, 10, -1);
//scene.add(dl2);

const dl3 = new THREE.DirectionalLight(0xa2d2ff, 1, 10);
dl3.position.set(-1, 1, 10);
scene.add(dl3);

// const light = new THREE.PointLight(0xa2d2ff, 1, 100);
// light.position.set(20, 10, 20);
// scene.add(light);

renderer.render(scene, camera);
console.log(renderer.domElement.toDataURL())

// Handle window resizing
// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth movement
controls.dampingFactor = 0.05; // Damping factor
controls.update();

function animate() {
    requestAnimationFrame( animate );
    // required if controls.enableDamping or controls.autoRotate are set to true
    //camera.position.y += 0.1;
    //sphereGroup.rotation.x += 0.005;
    // sphereGroup.rotation.y += 0.005;
    //sphereGroup.rotation.z += 0.001;
    controls.update();
    renderer.render( scene, camera );
}

// Handle window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

animate()
