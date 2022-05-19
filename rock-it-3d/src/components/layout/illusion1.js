import Brick2x4 from "../../assets/stl/300101_white_brick_2_x_4.stl"
import Brick2x3 from "../../assets/stl/300201_white_brick_2_x_3.stl"
import Brick2x2 from "../../assets/stl/300301_white_brick_2_x_2.stl"
import Brick1x2 from "../../assets/stl/300401_white_brick_1_x_2.stl"
import Brick1x1 from "../../assets/stl/300501_white_brick_1_x_1.stl"
import Brick2x8 from "../../assets/stl/300701_white_brick_2_x_8.stl"
import Brick1x8 from "../../assets/stl/300801_white_brick_1_x_8.stl"
import Brick1x6 from "../../assets/stl/300901_white_brick_1_x_6.stl"
import Brick1x4 from "../../assets/stl/301001_white_brick_1_x_4.stl"
import Brick1x3 from "../../assets/stl/362201_white_brick_1_x_3.stl"
import Brick2x6 from "../../assets/stl/4181142_-_2456_-_44237_white_brick_2_x_6.stl"

import React from 'react';

import { useEffect, useRef } from "react";

import { useThree, useFrame } from '@react-three/fiber'

import {STLLoader} from "three/examples/jsm/loaders/STLLoader";

import {Canvas, useLoader, Camera} from "react-three-fiber";

//import book from './book.stl'
import {LoadObjectFromFile, LoadObjectFromFile2} from './util';


const Illusion1 = () => {
    const {camera} = useThree();
  
    let objectFileName = Brick2x4;
    let objectFileName2 = Brick2x4;
    let objectFileName3 = Brick2x4;
    let objectFileName4 = Brick2x4;
    let objectFileName5 = Brick1x6;
    let objectFileName6 = Brick2x8;
    let scale_ratio = 0.105

    let scale = [scale_ratio, scale_ratio, scale_ratio];

    let rotation = [0, 0, 0];
    let color = "red";

    const globalOffset = [30, 0, 20];
  
    let xOffset = 0.9;
    let yOffset = 1;
    let zOffset = 0.9;
    let position = [globalOffset[0], 0, globalOffset[2]];
    let position2 = [globalOffset[0] + xOffset*1, yOffset*1, globalOffset[2] + zOffset*1];
    let position3 = [globalOffset[0] + xOffset*2, yOffset*2, globalOffset[2] + zOffset*2];
    let position4 = [globalOffset[0] + xOffset*3, yOffset*3, globalOffset[2] + zOffset*3];
    let position9 = [0, 1, 0];
    let position8 = [0, 2, 0];
    let position7 = [0, 4, 0];
    let position6 = [0, 5, 0];
    let position5 = [0, 6, 0];
    
    useFrame(() => {
        // console.log('camera', camera);
        // console.log('camera.position', camera.position);
        // console.log('camera.rotation', camera.rotation);
        
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

export default Illusion1;
