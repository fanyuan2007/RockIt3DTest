import React from 'react'
import {Canvas} from 'react-three-fiber'
import {OrbitControls} from '@react-three/drei'
import Box from './components/geometries/box'
import {Plane} from './components/geometries/plane'

function App() {
  return (
      <Canvas style={{position: "absolute"}}>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Box position={[-2,2,0]}/>
          <Box position={[2,2,0]}/>
          <Box position={[-2,2,-2]}/>
          <Box position={[2,2,-2]}/>
          <Plane />
      </Canvas>
  );
}

export default App;
