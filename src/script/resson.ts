import * as THREE from "three";

type CubeInfo = {
  color: number;
  positionX: number;
  positionY: number;
  rotationX: number;
  rotationY: number;
};

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// データ
const cubeDetail = {
  A: {
    color: 0x00ff00,
    positionX: 0,
    positionY: 0,
    rotationX: 0.01,
    rotationY: 0.01,
  },
  B: {
    color: 0x00ff00,
    positionX: 2,
    positionY: 0,
    rotationX: 0.03,
    rotationY: 0.01,
  },
  C: {
    color: 0xffff00,
    positionX: 2,
    positionY: 2,
    rotationX: 0.05,
    rotationY: 0.05,
  },
  D: {
    color: 0x0000ff,
    positionX: -2,
    positionY: 1,
    rotationX: 0.15,
    rotationY: 0.15,
  },
  E: {
    color: 0x0000ff,
    positionX: 2,
    positionY: -2,
    rotationX: 0.35,
    rotationY: 0.35,
  },
};

// 処理
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

const cubeA = addToScene(cubeDetail.A);
const cubeB = addToScene(cubeDetail.B);
const cubeC = addToScene(cubeDetail.C);
const cubeD = addToScene(cubeDetail.D);
const cubeE = addToScene(cubeDetail.E);

camera.position.z = 7;

// animate
const animate = (
  cube: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>,
  detail: CubeInfo
): void => {
  requestAnimationFrame(() => {
    animate(cube, detail);
  });

  cube.rotation.x += detail.rotationX;
  cube.rotation.y += detail.rotationY;

  renderer.render(scene, camera);
};
animate(cubeA, cubeDetail.A);
animate(cubeB, cubeDetail.B);
animate(cubeC, cubeDetail.C);
animate(cubeD, cubeDetail.D);
animate(cubeE, cubeDetail.E);
