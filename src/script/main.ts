import * as THREE from "three";

type CubeInfo = {
  color: number;
  positionX: number;
  positionY: number;
  rotationX: number;
  rotationY: number;
};

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cubeDetail = {
  A: {
    color: 0x00ff00,
    positionX: 0,
    positionY: 0,
    rotationX: 0.01,
    rotationY: 0.01,
  },

  B: {
    color: 0xffff00,
    positionX: 2,
    positionY: 0,
    rotationX: 0.03,
    rotationY: 0.01,
  },

  C: {
    color: 0x0000ff,
    positionX: 2,
    positionY: 2,
    rotationX: 0.05,
    rotationY: 0.05,
  },

  D: {
    color: 0xcbc0ff,
    positionX: -2,
    positionY: 1,
    rotationX: 0.15,
    rotationY: 0.15,
  },

  E: {
    color: 0xdb7093,
    positionX: 2,
    positionY: -2,
    rotationX: 0.35,
    rotationY: 0.35,
  },
};

const addToScene = (
  cubeDetail: CubeInfo
): THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial> => {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: cubeDetail.color });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.x = cubeDetail.positionX;
  cube.position.y = cubeDetail.positionY;
  scene.add(cube);

  return cube;
};

const cubes: {
  mesh: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>;
  detail: CubeInfo;
}[] = [];

for (const detail of Object.values(cubeDetail)) {
  cubes.push({
    mesh: addToScene(detail),
    detail,
  });
}

//球体
const geometryBall = new THREE.SphereGeometry(2, 64, 32);
const materialBall = new THREE.MeshBasicMaterial({
  color: 0xcbc0ff,
});
const sphere = new THREE.Mesh(geometryBall, materialBall);
sphere.position.x = -5;
sphere.position.y = 2;
scene.add(sphere);

//リング

const geometryRing = new THREE.RingGeometry(1, 3, 10);
const materialRing = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  side: THREE.DoubleSide,
});
const meshRing = new THREE.Mesh(geometryRing, materialRing);
meshRing.position.x = 7;
meshRing.position.y = 3;
scene.add(meshRing);

//カメラとアニメ化-------------------------

camera.position.z = 10;

const animate = () => {
  requestAnimationFrame(animate);

  for (const { mesh, detail } of cubes) {
    mesh.rotation.x += detail.rotationX;
    mesh.rotation.y += detail.rotationY;
  }

  // 球体の回転
  sphere.rotation.x += 0.03;
  sphere.rotation.y += 0.03;

  // リングの回転
  meshRing.rotation.x += 0.03;
  meshRing.rotation.y += 0.03;

  renderer.render(scene, camera);
};
animate();
