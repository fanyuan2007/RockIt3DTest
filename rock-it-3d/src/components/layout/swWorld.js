import React from 'react';

import { useEffect, useRef } from "react";

import { useThree, useFrame } from '@react-three/fiber'

import {STLLoader} from "three/examples/jsm/loaders/STLLoader";

import {Canvas, useLoader, Camera} from "react-three-fiber";

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
  
    let position2 = [0,0,0];
    position2[0] = position[0] + 10;
    let color2 = "red";
    const {camera} = useThree();

    useFrame(() => {
        
        console.log('camera', camera);
        console.log('camera.position', camera.position);
        console.log('camera.rotation', camera.rotation);
    });
    
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
        colorArg={color2}/>
        
    </>
    );

};

export default SWWorld;