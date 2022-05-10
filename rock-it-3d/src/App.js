import React from 'react';
import {Canvas} from 'react-three-fiber';
import {OrbitControls} from '@react-three/drei';
import {Plane} from './components/geometries/plane';
import NEWorld from './components/layout/neWorld';
import NWWorld from './components/layout/nwWorld';
import SWWorld from './components/layout/swWorld';
import SEWorld from './components/layout/seWorld';

function App() {
  return (
      <Canvas style={{position: "absolute"}}>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <NEWorld />
          <NWWorld />
          <SEWorld />
          <SWWorld />
          <Plane />
      </Canvas>
  );
}

export default App;
