import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cubeDetail = {
  A: {
    color: 0x00ff00,
    position.x = 0,
  },

  B: {
    color: 0xffff00,
    position.x = 2,
  },

  C: {},

  D: {},
  E: {},
};

const addToScene = (cubeDetail) => {
  const geometryA = new THREE.BoxGeometry(1, 1, 1);
  const materialA = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cubeA = new THREE.Mesh(geometryA, materialA);
  scene.add(cubeA);
};

addToScene(cubeDetail);

const geometryB = new THREE.BoxGeometry(1, 1, 1);
const materialB = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const cubeB = new THREE.Mesh(geometryB, materialB);
cubeB.position.x = 2;
scene.add(cubeB);

const geometryC = new THREE.BoxGeometry(1, 1, 1);
const materialC = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cubeC = new THREE.Mesh(geometryC, materialC);
cubeC.position.x = 2;
cubeC.position.y = 2;
scene.add(cubeC);

const geometryD = new THREE.BoxGeometry(1, 1, 1);
const materialD = new THREE.MeshBasicMaterial({ color: 0xcbc0ff });
const cubeD = new THREE.Mesh(geometryD, materialD);
cubeD.position.x = -2;
cubeD.position.y = 1;
scene.add(cubeD);

const geometryE = new THREE.BoxGeometry(1, 1, 1);
const materialE = new THREE.MeshBasicMaterial({ color: 0xdb7093 });
const cubeE = new THREE.Mesh(geometryE, materialE);
cubeE.position.x = 2;
cubeE.position.y = -2;
scene.add(cubeE);

camera.position.z = 7;

function animate() {
  requestAnimationFrame(animate);

  cubeA.rotation.x += 0.01;
  cubeA.rotation.y += 0.01;

  cubeB.rotation.x += 0.03;
  cubeB.rotation.y += 0.01;

  cubeC.rotation.x += 0.05;
  cubeC.rotation.y += 0.05;

  cubeD.rotation.x += 0.15;
  cubeD.rotation.y += 0.15;

  cubeE.rotation.x += 0.35;
  cubeE.rotation.y += 0.35;

  renderer.render(scene, camera);
}
animate();
