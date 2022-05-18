import React, {useEffect, useState} from 'react';
import {Canvas, useFrame, useThree} from 'react-three-fiber';
import {OrbitControls, PerspectiveCamera} from '@react-three/drei';
import * as THREE from 'three';
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

var isUpdate = false;

const CameraUpdate = ({cameraPos, lookAtPos}) => {
  useFrame((state) => {
    if (isUpdate)
    {
      state.camera.position.x = cameraPos[0];
      state.camera.position.y = cameraPos[1];
      state.camera.position.z = cameraPos[2];
      state.camera.lookAt(lookAtPos[0], lookAtPos[1], lookAtPos[2]);
      //console.log("current camera: ", state.camera);
      //console.log("current camera lookAt: ", lookAtPos);
      state.camera.updateProjectionMatrix();
      isUpdate = false;
    }
    //console.log("camera other: ", state.camera);
    state.camera.lookAt(lookAtPos[0], lookAtPos[1], lookAtPos[2]);
  })

  return null;
};

function App() {
  const textDisplay = "Rock It 3D!\n   Di Xu\n   Vincent Siu\n   Avner Moshkovitz\n   Douglas Chong\n   Han Zheng";
  const defaultPos1 = [-22,3,-19];
  const defaultPos2 = [-20,10,40];

  const [meshInfo, setMeshInfo] = useState({mId:0, xPos:0, yPos:0, zPos:0});
  const [mesh1Pos, setMesh1Pos] = useState(defaultPos1);
  const [mesh2Pos, setMesh2Pos] = useState(defaultPos2);

  const [camPos, setCamPos] = useState([-6.25, 11.73, -4.58]);

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
      
    }
    else
    {
      setCamPos([-6.25, 11.73, -4.58]);
    }
    isUpdate = true;
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
      <Canvas style={{position: "absolute"}} camera={{ position: [0, 0, 30]}}>
          <OrbitControls />
          <CameraUpdate cameraPos={camPos} lookAtPos={mesh1Pos}/>
          {/*<PerspectiveCamera manual onUpdate={onPerspectiveCameraUpdateHandler} />*/}
          {/* illusion 2:
          camera.position Vector3 {x: 16.80139210958912, y: 13.76807931426504, z: 26.619405072875377}
avner.js:59 camera.rotation Euler {_x: -0.6399842456636935, _y: -0.26125929633748424, _z: -0.18998795607798563, _order: 'XYZ', _onChangeCallback: ƒ} */}
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.9} penumbra={1} />
          <directionalLight color={"0xffffff"} intensity={0.5} />
          <KittyClimbing position={mesh1Pos}/>
          <ObjMeshTester position={mesh2Pos}/>
          <TextGeom position={[10,30,-25]} text={textDisplay} size={3} height={5}/>
          <SEWorld />
          <SWWorld />
          <Ground />
      </Canvas>
    </>
  );
}

export default App;
