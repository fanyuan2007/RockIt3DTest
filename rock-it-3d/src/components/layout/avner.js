import Brick2x4 from "../../assets/stl/300101_white_brick_2_x_4.stl"
import Brick2x3 from "../../assets/stl/300201_white_brick_2_x_3.stl"

import React from 'react';

import { useEffect, useRef } from "react";

import { useThree, useFrame } from '@react-three/fiber'

import {STLLoader} from "three/examples/jsm/loaders/STLLoader";

import {Canvas, useLoader, Camera} from "react-three-fiber";

//import book from './book.stl'
import {LoadObjectFromFile, LoadObjectFromFile2} from './util';


const SWWorld = () => {

    let objectFileName = Brick2x4;
    let objectFileName2 = Brick2x4;
    let scale_ratio = 0.105

    let scale = [scale_ratio, scale_ratio, scale_ratio];

    let rotation = [0, 0, 0];
    let color = "pink";
  
    let position = [0,0,0];
    let position2 = [10, 10, 20];
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
        objectFileNameArg={objectFileName2} 
        positionArg={position2}
        scaleArg={scale} 
        rotationArg={rotation}
        colorArg={color2}/>
    
    </>
    );

};

export default SWWorld;