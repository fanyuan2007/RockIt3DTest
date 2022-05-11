import React from 'react';
import {Canvas, useFrame} from 'react-three-fiber';
import {OrbitControls, PerspectiveCamera} from '@react-three/drei';
import NEWorld from './components/layout/neWorld';
import NWWorld from './components/layout/nwWorld';
import SWWorld from './components/layout/avner';
import SEWorld from './components/layout/seWorld';
import Ground from './components/layout/ground';
import { useEffect, useRef } from "react";

function App() {

  return (
      <Canvas style={{position: "absolute"}} >
          <OrbitControls />
          <PerspectiveCamera makeDefault position={[-6.25, 11.73, -4.58]} rotation={[-2.14, -0.59, -2.42]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <NEWorld />
          <NWWorld />
          <SEWorld />
          <SWWorld />
          <Ground />
      </Canvas>
  );
}

export default App;
