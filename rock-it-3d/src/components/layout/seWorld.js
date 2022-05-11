
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

import { useThree } from '@react-three/fiber'

import {STLLoader} from "three/examples/jsm/loaders/STLLoader";

import {Canvas, useLoader} from "react-three-fiber";

//import book from './book.stl'
import {LoadObjectFromFile, LoadObjectFromFile2} from './util';


const SEWorld = () => {

    // let objectFileName = Brick2x6;
    

    let twobyfour = Brick2x4;
    let twobytwo = Brick2x2;

    let height = 1
    let wd = 1.7
    let width = wd
    let depth = wd*2

    let scale_ratio = 0.105

    let scale = [scale_ratio, scale_ratio, scale_ratio];

    let straight = [0, 0, 0];
    let rotated = [0, Math.PI/2, 0];

    let colors = ["red", "green", "blue", "pink", "purple"];
  
    let xOffset = 2;
    let yOffset = 1;
    let zOffset = 4;
    let position1 = [0, 0, 0];
    let position2 = [0, 0, depth];
    let position3 = [0, 0, depth*2];
    let position4 = [0, 0, depth*3];
    let position5 = [0, 0, depth*3];

    let position11 = [0, 0, 0];
    let position12 = [0, 1, width];
    let position13 = [0, 1, width + (depth)];
    let position14 = [0, 1, width + (depth*2)];

    // let position15 = [0, 1, depth*3.5];

    let rposition1 = [0, 1, -depth];
    let rposition2 = [depth, 1, -depth];
    let rposition3 = [width, 0, -depth];
    let rposition4 = [width+depth, 0, -depth];

    // let rposition4 = [width+depth, 0, -depth];
    // let rposition4 = [width+depth, 0, -depth];
    // let rposition4 = [width+depth, 0, -depth];
    // let rposition4 = [width+depth, 0, -depth];
    // let rposition4 = [width+depth, 0, -depth];

    return (
        <>
        <LoadObjectFromFile 
            objectFileNameArg={twobyfour} 
            positionArg={position1}
            scaleArg={scale} 
            rotationArg={rotated}
        colorArg={colors[0]}/>
        
        <LoadObjectFromFile 
            objectFileNameArg={twobyfour} 
            positionArg={position2}
            scaleArg={scale} 
            rotationArg={rotated}
        colorArg={colors[1]}/>
        
        <LoadObjectFromFile 
            objectFileNameArg={twobyfour} 
            positionArg={position3}
            scaleArg={scale} 
            rotationArg={rotated}
        colorArg={colors[2]}/>
        
        <LoadObjectFromFile 
            objectFileNameArg={twobyfour} 
            positionArg={position4}
            scaleArg={scale} 
            rotationArg={rotated}
        colorArg={colors[3]}/>
        
        <LoadObjectFromFile 
            objectFileNameArg={twobyfour} 
            positionArg={position5}
            scaleArg={scale} 
            rotationArg={rotated}
        colorArg={colors[4]}/>
        

        
        <LoadObjectFromFile 
            objectFileNameArg={twobyfour} 
            positionArg={position11}
            scaleArg={scale} 
            rotationArg={rotated}
        colorArg={colors[0]}/>
        
        <LoadObjectFromFile 
            objectFileNameArg={twobyfour} 
            positionArg={position12}
            scaleArg={scale} 
            rotationArg={rotated}
        colorArg={colors[1]}/>
        
        <LoadObjectFromFile 
            objectFileNameArg={twobyfour} 
            positionArg={position13}
            scaleArg={scale} 
            rotationArg={rotated}
        colorArg={colors[2]}/>
        
        <LoadObjectFromFile 
            objectFileNameArg={twobyfour} 
            positionArg={position14}
            scaleArg={scale} 
            rotationArg={rotated}
        colorArg={colors[3]}/>

        

        <LoadObjectFromFile 
            objectFileNameArg={twobyfour} 
            positionArg={rposition1}
            scaleArg={scale} 
            rotationArg={straight}
        colorArg={colors[3]}/>
                
        <LoadObjectFromFile 
            objectFileNameArg={twobyfour} 
            positionArg={rposition2}
            scaleArg={scale} 
            rotationArg={straight}
        colorArg={colors[1]}/>
                
        <LoadObjectFromFile 
            objectFileNameArg={twobyfour} 
            positionArg={rposition3}
            scaleArg={scale} 
            rotationArg={straight}
        colorArg={colors[2]}/>

        <LoadObjectFromFile 
            objectFileNameArg={twobytwo} 
            positionArg={rposition4}
            scaleArg={scale} 
            rotationArg={straight}
        colorArg={colors[0]}/>
        </>
    );
}

export default SEWorld;