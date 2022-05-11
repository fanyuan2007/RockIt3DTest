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
    
    
    let scale = [0.1, 0.1, 0.1];
    let rotation = [0, 0, 0];
    let color = "orange";
  
    let xOffset = 0.9;
    let yOffset = 1;
    let zOffset = 0.9;
    let position = [0, 0, 0];
    let position2 = [xOffset*1, yOffset*1, zOffset*1];
    let position3 = [xOffset*2, yOffset*2, zOffset*2];
    let position4 = [xOffset*3, yOffset*3, zOffset*3];
    
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

    <LoadObjectFromFile 
        objectFileNameArg={objectFileName} 
        positionArg={position3}
        scaleArg={scale} 
        rotationArg={rotation}
        colorArg={color}/>

    <LoadObjectFromFile 
        objectFileNameArg={objectFileName} 
        positionArg={position4}
        scaleArg={scale} 
        rotationArg={rotation}
        colorArg={color}/>
        
    </>
    );

};

export default SWWorld;