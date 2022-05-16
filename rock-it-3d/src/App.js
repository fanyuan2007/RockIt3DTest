import React, {useState} from 'react';
import {Canvas, useFrame} from 'react-three-fiber';
import {OrbitControls, PerspectiveCamera} from '@react-three/drei';
import Box from './components/geometries/box';
import ObjMeshTester from './components/layout/objMeshTester';
import SWWorld from './components/layout/illusion1';
import SEWorld from './components/layout/seWorld';
import Ground from './components/layout/ground';
import DisplayForm from './components/layout/displayForm';
import KittyClimbing from './components/layout/kittyClimbing';
import TextGeom from './components/geometries/textGeom';
import IllusionStairs from './components/layout/illusionStairs';
import Banner from './components/layout/banner';
import FunctionalButtonGroup from './components/layout/functionalButtonGroup';

function App() {
  const textDisplay = "Rock It 3D!\nDi Xu\nVincent Siu\nAvner\nDouglas Chong\nHan Zheng";
  const defaultPos1 = [0,0,0];
  const defaultPos2 = [20,20,20];

  const [meshInfo, setMeshInfo] = useState({mId:0, xPos:0, yPos:0, zPos:0});
  const [mesh1Pos, setMesh1Pos] = useState(defaultPos1);
  const [mesh2Pos, setMesh2Pos] = useState(defaultPos2);

  const [camPos, setCamPos] = useState([-6.25, 11.73, -4.58]);
  const [camRot, setCamRot] = useState([-2.14, -0.59, -2.42]);

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

  const onCameraPositionUpdateHandler = (camUpdateInfo) => {
    if (camUpdateInfo.camId == 0)
    {
      setCamPos([16.8, 13.8, 26.6]);
      setCamRot([-0.6, -0.3, -0.2]);
    }
    else
    {
      setCamPos([-6.25, 11.73, -4.58]);
      setCamRot([-2.14, -0.59, -2.42]);
    }
  };

  return (
    <>
      <div>
        <Banner />
      </div>
      <div style={{border: "solid", width: "150"}}>
        <DisplayForm updatePosition={onMeshPositionUpdate}/>
      </div>
      <div>
        <FunctionalButtonGroup updateCameraPos={onCameraPositionUpdateHandler}/>
      </div>
      <Canvas style={{position: "absolute"}} >
          <OrbitControls />
          <PerspectiveCamera makeDefault position={camPos} rotation={camRot} />
          {/* illusion 2:
          camera.position Vector3 {x: 16.80139210958912, y: 13.76807931426504, z: 26.619405072875377}
avner.js:59 camera.rotation Euler {_x: -0.6399842456636935, _y: -0.26125929633748424, _z: -0.18998795607798563, _order: 'XYZ', _onChangeCallback: ƒ} */}
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Box position={mesh2Pos} color={"yellow"}/>
          <ObjMeshTester />
          <KittyClimbing position={mesh1Pos}/>
          <TextGeom position={[10,10,10]} text={textDisplay} size={3} height={5}/>
          <SEWorld />
          <SWWorld />
          <Ground />
      </Canvas>
    </>
  );
}

export default App;
