import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
// @ts-ignore
import vertexShader from "../shaders/vertex.vert?raw";
// @ts-ignore
import noiseFragmentShader from "../shaders/noise.frag?raw";
import { Lag } from "./lag";
import DeltaTime from "../../DeltaTime";
import { ShaderToScreen } from "./shaderToScreen";
import { Assists } from "../loader";

export default function ScreenRenderEngine(
  assists: Assists,
  renderer: THREE.WebGLRenderer,
  sceneRTT: THREE.Scene,
) {
  const resolution = 512 + 64;

  const cameraRTT = new THREE.OrthographicCamera(-0.1, 1.496, 0.1, -1.1, 1, 3);
  sceneRTT.add(cameraRTT);
  cameraRTT.position.set(0, 0, 1);

  const rtTexture = new THREE.WebGLRenderTarget(resolution * 1.33, resolution, {
    format: THREE.RGBFormat,
  });

  const composer = new EffectComposer(renderer, rtTexture);
  composer.renderToScreen = false;

  const renderPass = new RenderPass(sceneRTT, cameraRTT);
  composer.addPass(renderPass);

  const noiseMat = new THREE.ShaderMaterial({
    uniforms: {
      uDiffuse: { value: null },
      uTime: { value: 1 },
      uProgress: { value: 1.2 },
    },
    vertexShader: vertexShader,
    fragmentShader: noiseFragmentShader,
  });

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(128, 128),
    1.1,
    0.4,
    0,
  );
  composer.addPass(bloomPass);

  const lag = new Lag(composer.readBuffer, resolution * 1.33, resolution);
  noiseMat.uniforms.uDiffuse.value = lag.outputTexture.texture;

  let uProgress = 1.2;
  const tick = (deltaTime: number, elapsedTime: number) => {
    noiseMat.uniforms.uTime.value = elapsedTime;
    noiseMat.uniforms.uProgress.value = uProgress;

    shaderToScreen.shader.uniforms.uTime.value = elapsedTime;
    shaderToScreen.shader.uniforms.uProgress.value = uProgress;

    shaderToScreen.render(renderer);

    uProgress -= deltaTime * 0.2;
    if (uProgress < 0) uProgress = 1.2;

    lag.render(renderer);
    composer.render();
  };

  // **********************************

  const environmentMapTexture = assists.environmentMapTexture;
  if (environmentMapTexture) {
    environmentMapTexture.encoding = THREE.sRGBEncoding;
  } else {
    console.warn(
      "environmentMapTexture is undefined — encoding not set (check asset path/network).",
    );
  }

  const shaderToScreen = new ShaderToScreen(
    {
      uniforms: {
        uDiffuse: { value: lag.outputTexture.texture },
        uTime: { value: 1 },
        uProgress: { value: 1.2 },
      },
      vertexShader: vertexShader,
      fragmentShader: noiseFragmentShader,
    },
    resolution * 1.33,
    resolution,
  );

  if (
    shaderToScreen &&
    shaderToScreen.outputTexture &&
    shaderToScreen.outputTexture.texture
  ) {
    shaderToScreen.outputTexture.texture.encoding = THREE.sRGBEncoding;
  } else {
    console.warn(
      "shaderToScreen.outputTexture.texture is undefined — skipping encoding set.",
    );
  }

  const material = new THREE.MeshStandardMaterial();
  material.metalness = 0;
  material.roughness = 0.125;
  material.envMap = environmentMapTexture;
  material.envMapIntensity = 0.7;
  material.map = shaderToScreen.outputTexture.texture;

  return { tick, material };
}
