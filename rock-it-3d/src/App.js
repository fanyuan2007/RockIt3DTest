import React, {useState} from 'react';
import {Canvas, useFrame} from 'react-three-fiber';
import {OrbitControls, PerspectiveCamera} from '@react-three/drei';
import Box from './components/geometries/box';
import NEWorld from './components/layout/neWorld';
import ObjMeshTester from './components/layout/objMeshTester';
import SWWorld from './components/layout/illusion1';
import SEWorld from './components/layout/seWorld';
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
    //console.log("mesh information: ", meshInfo);
    var newMesh = [meshInfo.xPos, meshInfo.yPos, meshInfo.zPos];
    if (meshInfo.mId == 0)
    {
      setMesh1Pos([...newMesh]);
    }
    else
    {
      setMesh2Pos([...newMesh]);
    }
  };

  return (
    <>
      <div style={{border: "solid", width: "200", minHeight: "100%"}}>
        <DisplayForm updatePosition={onMeshPositionUpdate}/>
      </div>
      <Canvas style={{position: "absolute"}} >
          <OrbitControls />
          <PerspectiveCamera makeDefault position={[-6.25, 11.73, -4.58]} rotation={[-2.14, -0.59, -2.42]} />
          {/* illusion 2:
          camera.position Vector3 {x: 16.80139210958912, y: 13.76807931426504, z: 26.619405072875377}
avner.js:59 camera.rotation Euler {_x: -0.6399842456636935, _y: -0.26125929633748424, _z: -0.18998795607798563, _order: 'XYZ', _onChangeCallback: ƒ} */}
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Box position={mesh1Pos} color={"red"}/>
          <Box position={mesh2Pos} color={"yellow"}/>
          <NEWorld />
          <ObjMeshTester />
          <SEWorld />
          <SWWorld />

          {/* <Ground /> */}
      </Canvas>
    </>
  );
}

export default App;
