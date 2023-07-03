// TypeScriptによるthree.jsの使用例

import * as THREE from "three";

// シーンを作成
const scene: THREE.Scene = new THREE.Scene();

// カメラを作成
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// レンダラーを作成
const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ジオメトリとマテリアルを作成
const geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 3);
const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// キューブを作成してシーンに追加
const cube: THREE.Mesh = new THREE.Mesh(geometry, material);
scene.add(cube);

// カメラの位置を調整
camera.position.z = 5;

// アニメーション関数
function animate() {
  requestAnimationFrame(animate);

  // キューブを回転
  cube.rotation.x += 0.06;
  cube.rotation.y += 0.06;

  // レンダリング
  renderer.render(scene, camera);
}

// アニメーション開始
animate();
