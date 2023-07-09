import * as THREE from "three"; // THREE.jsライブラリをインポート

// シーン、カメラ、レンダラーを作成
const scene: THREE.Scene = new THREE.Scene();
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // レンダラーをHTMLのbodyに追加

// 立方体を作成し、その場所と色を設定する関数
function createCube(x: number, y: number, z: number, color: number): THREE.Mesh {
  const geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 1); // 立方体の形状を作成
  const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
    color: color,
  }); // 立方体の素材を作成
  const cube: THREE.Mesh = new THREE.Mesh(geometry, material); // 形状と素材から立方体を作成
  cube.position.set(x, y, z); // 立方体の位置を設定
  scene.add(cube); // 立方体をシーンに追加
  return cube; // 作成した立方体を返す
}

// 立方体とその回転速度を管理するオブジェクト
interface CubeObject {
  cube: THREE.Mesh;
  rotationSpeed: {
    x: number;
    y: number;
  };
}

const cubes: { [key: string]: CubeObject } = {
  cubeA: {
    cube: createCube(0, 0, 0, 0x00ff00),
    rotationSpeed: { x: 0.01, y: 0.01 },
  },
  cubeB: {
    cube: createCube(2, 0, 0, 0xffff00),
    rotationSpeed: { x: 0.03, y: 0.01 },
  },
  cubeC: {
    cube: createCube(2, 2, 0, 0x0000ff),
    rotationSpeed: { x: 0.05, y: 0.05 },
  },
  cubeD: {
    cube: createCube(-2, 1, 0, 0xcbc0ff),
    rotationSpeed: { x: 0.15, y: 0.15 },
  },
  cubeE: {
    cube: createCube(2, -2, 0, 0xdb7093),
    rotationSpeed: { x: 0.35, y: 0.35 },
  },
};

camera.position.z = 7; // カメラのz座標を設定

// アニメーション関数
function animate(): void {
  requestAnimationFrame(animate); // 次のフレームの描画を要求
  Object.values(cubes).forEach(({ cube, rotationSpeed }) => {
    // すべての立方体について
    cube.rotation.x += rotationSpeed.x; // x軸周りの回転を更新
    cube.rotation.y += rotationSpeed.y; // y軸周りの回転を更新
  });
  renderer.render(scene, camera); // シーンをレンダリング（描画）
}

animate(); // アニメーションを開始

// import * as THREE from 'three';: THREE.jsというJavaScriptライブラリを使用します。
// このライブラリには、WebGLを使用した3Dグラフィックスを描画するための便利な関数が含まれています。
// const scene: THREE.Scene = new THREE.Scene();、const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);、const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();：3D表示に必要な「シーン」「カメラ」「レンダラー」を作成します。
// createCube関数：立方体の形状、材料、位置を設定し、シーンに追加する関数です。これにより、コードの重複を避けることができます。
// const cubes: {[key: string]: CubeObject} = {...}：立方体とその回転速度を管理するオブジェクトを作成します。
// animate関数：アニメーションのループを制御する関数です。ここでは、各立方体の回転と描画を制御しています。
// animate();：アニメーションを開始します。
