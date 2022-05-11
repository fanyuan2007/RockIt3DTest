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

/*     let objectFileName = "./White_Brick_2_3.stl";
 */
    let objectFileName = "./assets/stl/300101_white_brick_2_x_4.stl";
    
    let position = [0, 0, 0];
    let scale = [0.1, 0.1, 0.1];
    let rotation = [0, 0, 0];
    let color = "orange";
  
    let position2 = [10, 10, 20];
    
    return (
        <>

    <LoadObjectFromFile 
        objectFileNameArg={objectFileName} 
        positionArg={position}
        scaleArg={scale} 
        rotationArg={rotation}
        colorArg={color}/>
        
    <LoadObjectFromFile 
        objectFileNameArg={objectFileName} 
        positionArg={position2}
        scaleArg={scale} 
        rotationArg={rotation}
        colorArg={color}/>
        
    </>
    );

};

export default SWWorld;