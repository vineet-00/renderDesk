import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

type Assists = {
  screenMesh: THREE.Mesh;
  computerMesh: THREE.Mesh;
  crtMesh: THREE.Mesh;
  keyboardMesh: THREE.Mesh;
  shadowPlaneMesh: THREE.Mesh;
  bakeTexture: THREE.Texture;
  bakeFloorTexture: THREE.Texture;
  publicPixelFont: Font;
  chillFont: Font;
  environmentMapTexture: THREE.CubeTexture;
};

const base = import.meta.env.BASE_URL || "/";

function loadAssists(callback: (assists: Assists) => any) {
  const assists: any = {};

  const loadingDOM = document.querySelector("#loading");
  const loadingItemsDOM = document.querySelector("#loading-items");
  const loadingBarDOM = document.querySelector("#loading-bar-progress");

  const manager = new THREE.LoadingManager();

  manager.onStart = function (url, itemsLoaded, itemsTotal) {
    console.log(
      "Started loading file: " +
        url +
        ".\nLoaded " +
        itemsLoaded +
        " of " +
        itemsTotal +
        " files.",
    );
  };

  manager.onLoad = function () {
    if (!loadingItemsDOM) return;
    loadingItemsDOM.textContent = `Nearly There...`;

    console.log("Loading complete!");
    window.setTimeout(() => {
      (loadingDOM as any).style.opacity = "0";
      callback(assists as Assists);
    }, 200);
    window.setTimeout(() => {
      (loadingDOM as any).style.display = "none";
    }, 500);
  };

  manager.onProgress = function (url, itemsLoaded, itemsTotal) {
    if (!loadingItemsDOM || !loadingBarDOM) return;
    (loadingBarDOM as HTMLElement).style.transform = `scaleX(${
      itemsLoaded / itemsTotal
    })`;
    loadingItemsDOM.textContent = `${itemsLoaded} of ${itemsTotal} File Loaded: ${url}`;
    console.log(
      "Loading file: " +
        url +
        ".\nLoaded " +
        itemsLoaded +
        " of " +
        itemsTotal +
        " files.",
    );
  };

  // Fonts
  const fontLoader = new FontLoader(manager);
  fontLoader.load(
    `${base}fonts/public-pixel.json`,
    (font) => {
      console.log("public-pixel font loaded:", font instanceof Font, font);
      assists.publicPixelFont = font;
    },
    undefined,
    (err) => console.error("public-pixel font load error", err),
  );

  fontLoader.load(
    `${base}fonts/chill.json`,
    (font) => {
      console.log("chill font loaded:", font instanceof Font, font);
      assists.chillFont = font;
    },
    undefined,
    (err) => console.error("chill font load error", err),
  );

  // Texture

  // Texture
  const textureLoader = new THREE.TextureLoader(manager);
  textureLoader.load(
    `${base}textures/bake-quality-5.jpg`,
    (tex) => {
      tex.flipY = false;
      tex.encoding = THREE.sRGBEncoding;
      assists.bakeTexture = tex;
      console.log("bake-quality-5 loaded");
    },
    undefined,
    (err) => console.error("bake-quality-5 load error", err),
  );

  textureLoader.load(
    `${base}textures/bake_floor-quality-3.jpg`,
    (tex) => {
      tex.flipY = false;
      tex.encoding = THREE.sRGBEncoding;
      assists.bakeFloorTexture = tex;
      console.log("bake-floor loaded");
    },
    undefined,
    (err) => console.error("bake-floor load error", err),
  );

  const cubeTextureLoader = new THREE.CubeTextureLoader(manager);

  cubeTextureLoader.load(
    [
      `${base}textures/environmentMap/px.jpg`,
      `${base}textures/environmentMap/nx.jpg`,
      `${base}textures/environmentMap/py.jpg`,
      `${base}textures/environmentMap/ny.jpg`,
      `${base}textures/environmentMap/pz.jpg`,
      `${base}textures/environmentMap/nz.jpg`,
    ],
    (tex) => {
      console.log("environment map loaded", tex);
      assists.environmentMapTexture = tex;
    },
    undefined,
    (err) => console.error("environment map load error", err),
  );

  // Mesh
  const gltfLoader = new GLTFLoader(manager);
  gltfLoader.load(`${base}models/Commodore710_33.5.glb`, (gltf) => {
    assists.screenMesh = gltf.scene.children.find((m) => m.name === "Screen");
    assists.computerMesh = gltf.scene.children.find(
      (m) => m.name === "Computer",
    );
    assists.crtMesh = gltf.scene.children.find((m) => m.name === "CRT");
    assists.keyboardMesh = gltf.scene.children.find(
      (m) => m.name === "Keyboard",
    );
    assists.shadowPlaneMesh = gltf.scene.children.find(
      (m) => m.name === "ShadowPlane",
    );
  });
}

export { loadAssists };
export type { Assists };
