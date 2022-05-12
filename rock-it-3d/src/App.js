import React, {useState} from 'react';
import {Canvas, useFrame} from 'react-three-fiber';
import {OrbitControls, PerspectiveCamera} from '@react-three/drei';
import Box from './components/geometries/box';
import NEWorld from './components/layout/neWorld';
import NWWorld from './components/layout/nwWorld';
import SEWorld from './components/layout/seWorld';
import SWWorld from './components/layout/swWorld';
import AVNER from './components/layout/avner';
import Ground from './components/layout/ground';
import DisplayForm from './components/layout/displayForm';

function App() {
  const defaultPos1 = [0,0,0];
  const defaultPos2 = [20,20,20];

  const [meshInfo, setMeshInfo] = useState({mId:0, xPos:0, yPos:0, zPos:0});
  const [mesh1Pos, setMesh1Pos] = useState(defaultPos1);
  const [mesh2Pos, setMesh2Pos] = useState(defaultPos2);

  const onMeshPositionUpdate = (updatedMeshInfo) => {
    //console.log("values: ", updatedMeshInfo);
    setMeshInfo(updatedMeshInfo);
    console.log("mesh information: ", meshInfo);
    if (meshInfo.mId == 0)
    {
      setMesh1Pos([meshInfo.xPos, meshInfo.yPos, meshInfo.zPos]);
    }
    else
    {
      setMesh2Pos([meshInfo.xPos, meshInfo.yPos, meshInfo.zPos]);
    }
  };

  return (
    <>
      <div style={{border: "solid", width: "200", minHeight: "100%"}}>
        <DisplayForm updatePosition={onMeshPositionUpdate}/>
      </div>
      <Canvas style={{position: "absolute"}} >
          <OrbitControls />
          <PerspectiveCamera makeDefault position={[42.97, 39.16, -12.28]} rotation={[1.874, 0.808, 1.980]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Box position={mesh1Pos} color={"red"}/>
          <Box position={mesh2Pos} color={"yellow"}/>
          <NEWorld />
          <NWWorld />
          <SEWorld />
          <SWWorld />
          <AVNER />
          <Ground />
      </Canvas>
    </>
  );
}

export default App;
