import React from 'react';
import {Canvas, useFrame} from 'react-three-fiber';
import {OrbitControls, PerspectiveCamera} from '@react-three/drei';
import NEWorld from './components/layout/neWorld';
import NWWorld from './components/layout/nwWorld';
import SWWorld from './components/layout/illusion1';
import SEWorld from './components/layout/seWorld';
import Ground from './components/layout/ground';
import { useEffect, useRef } from "react";

function App() {

  return (
      <Canvas style={{position: "absolute"}} >
          <OrbitControls />
          <PerspectiveCamera makeDefault position={[-6.25, 11.73, -4.58]} rotation={[-2.14, -0.59, -2.42]} />
          {/* illusion 2:
          camera.position Vector3 {x: 16.80139210958912, y: 13.76807931426504, z: 26.619405072875377}
avner.js:59 camera.rotation Euler {_x: -0.6399842456636935, _y: -0.26125929633748424, _z: -0.18998795607798563, _order: 'XYZ', _onChangeCallback: ƒ} */}
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <NEWorld />
          <NWWorld />
          <SEWorld />
          <SWWorld />

          {/* <Ground /> */}
      </Canvas>
  );
}

export default App;
