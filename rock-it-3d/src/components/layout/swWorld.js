// import React from "react";
// import Box from '../geometries/box';
// import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

// const SWWorld = () => {
//     return (
//         <>
//             <Box position={[-2,2,4]} color={"pink"}/>
//             <Box position={[-4,2,4]} color={"pink"}/>
//             <Box position={[-2,4,4]} color={"cyan"}/>
//             <Box position={[-4,4,4]} color={"cyan"}/>
//         </>
//     );
// }

// export default SWWorld;
import React from 'react';

import { useEffect, useRef } from "react";

import { useThree } from '@react-three/fiber'

import {STLLoader} from "three/examples/jsm/loaders/STLLoader";

import {Canvas, useLoader} from "react-three-fiber";

//import book from './book.stl'
import {LoadObjectFromFile, LoadObjectFromFile2} from './util';


const SWWorld = () => {

    let objectFileName = "./White_Brick_2_3.stl";
    let position = [0, 0, 0];
    let scale = [0.1, 0.1, 0.1];
    let rotation = [0, 0, 0];
    let color = "orange";
    return (<LoadObjectFromFile 
        objectFileNameArg={objectFileName} 
        positionArg={position}
        scaleArg={scale} 
        rotationArg={rotation}
        colorArg={color}/>);
    
/*     const geom = useLoader(STLLoader, "./White_Brick_2_3.stl");
    const ref = useRef();
    const {camera} = useThree();

    useEffect(() => {
        camera.lookAt(ref.current.position);
    });

    // load_file_position_xyz_scale__rotate_color
    return (
        <>
            <mesh ref={ref} position={[0,0,0]} scale={[0.1, 0.1, 0.1]}>
                <primitive object={geom} attach="geometry"/>
                <meshStandardMaterial color={"orange"}/>
            </mesh>
            <ambientLight/>
            <pointLight position={[10, 10, 10]}/>
        </>
    );
 */

};

export default SWWorld;