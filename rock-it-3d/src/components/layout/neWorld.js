import React from 'react';

import { useEffect, useRef } from "react";

import { useThree } from '@react-three/fiber'

import {STLLoader} from "three/examples/jsm/loaders/STLLoader";

import {Canvas, useLoader} from "react-three-fiber";

//import book from './book.stl'
import {LoadObjectFromFile, LoadObjectFromFile2} from './util';


const NEWorld = () => {


    let objectFileName_kitty = "./assets/stl/Unikitty.stl";
    
    let rotation = [0, 0, 0];
    let color = "pink";
  
    let scale_k = [1, 1, 1]
    let position_k = [-2,2,1];
    
    return (
        <>

    <LoadObjectFromFile 
        objectFileNameArg={objectFileName_kitty} 
        positionArg={position_k}
        scaleArg={scale_k} 
        rotationArg={rotation}
        colorArg={color}/>
        
    </>
    );

};

export default NEWorld;