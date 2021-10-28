import './App.scss';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, DepthOfField, Bloom, Noise, Pixelation } from '@react-three/postprocessing'
import { Anim } from './Anim';
import * as THREE from "three";
import Roboto from "./DotGothic16_Regular.json"
<style>
  @import url('http://fonts.cdnfonts.com/css/futura-now-text?styles=87687,87690,87692,87681,87685');
</style>

function Text3d() {
  const font = new THREE.FontLoader().parse(Roboto);
  const textOptions = {
    font,
    size: 2.1,
    height: 0
  };
  return (
    <mesh position={[-15, 1, -10]}>
      <textGeometry attach='geometry' args={['Jason Hannanto', textOptions]} />
      <meshStandardMaterial attach='material' color="blue" />
    </mesh>
  )
}

function Text4d() {
  const font = new THREE.FontLoader().parse(Roboto);
  const textOptions = {
    font,
    size: 0.4,
    height: 0
  };
  return (
    <mesh position={[5.25, 1.0, -8]}>
      <textGeometry attach='geometry' args={['Front End Developer', textOptions]} />
      <meshStandardMaterial attach='material' color="hotpink" />
    </mesh>
  )
}


function AnimationCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 1, 10], fov: 60 }}
    >
      <Text3d />
      <Text4d />

      <EffectComposer>
        <ambientLight />
        <Anim />
        <DepthOfField focusDistance={0.1} focalLength={10} bokehScale={3} height={300} />
        <Bloom luminanceThreshold={5} luminanceSmoothing={0.2} height={500} />
        <Noise opacity={0.2} />

        <Pixelation
          granularity={1.5} // pixel granularity
        />

      </EffectComposer>
    </Canvas>
  );
}

function App() {
  let styler = {
    minWidth: "1000px",
    minHeight: "1000px",
  }
  return (
    <div className="app" >
      <div className="anim" style={styler} >
        <AnimationCanvas />
      </div>
    </div>
  );
}

export default App;
