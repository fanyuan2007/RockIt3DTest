import React, {useEffect, useState, useRef} from 'react';
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
import styles from './components/layout/layout.module.css';



const CameraUpdate = ({cameraPos}) => {
  const {camera} = useThree();

  // console.log('camera.position.x, y, z before:', camera.position.x, camera.position.y, camera.position.z);

  camera.position.x = cameraPos[0];
  camera.position.y = cameraPos[1];
  camera.position.z = cameraPos[2];
  
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

  const ref = useRef();
  const controls = useRef();
  
  const onCameraPositionUpdateHandler = (camUpdateInfo) => {

    // console.log('controls.current.target.x, y, z before', controls.current.target.x, controls.current.target.y, controls.current.target.z);

    // We need to update the target of orbitControls (controls.current.target)
    // It dictates where the camera looks to.
    if (camUpdateInfo.camId == 0)
    {
      // Look at obj illusion2
      setCamPos([9.81, 10.22, 39.39]);
      controls.current.target.x = 11.45 ;
      controls.current.target.y = -4.08;
      controls.current.target.z = 26.35;
    }
    else
    {
      // Look at obj illusion1
      setCamPos([23.40, 10.72, 15.30]);
      controls.current.target.x = 33.44;
      controls.current.target.y = -4.30;
      controls.current.target.z = 22.41;
    }
    controls.current.update();
  };

  return (
    <>
      <div>
        <Banner />
      </div>
      <div className={styles.group}>
        <div className={styles.form_wrapper}>
          <DisplayForm updatePosition={onMeshPositionUpdate}/>
        </div>
        <div className={styles.event_wrapper}>
          <FunctionalButtonGroup updateCameraPos={onCameraPositionUpdateHandler}/>
        </div>
      </div>
      <Canvas style={{position: "absolute"}} camera={{ position: [0, 0, 30]}}>
          <OrbitControls ref={controls} enableDamping={false}/>
          <CameraUpdate cameraPos={camPos}/>
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
