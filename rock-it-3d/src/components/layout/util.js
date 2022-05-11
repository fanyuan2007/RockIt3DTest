import React from 'react';

import { useEffect, useRef } from "react";

import { useThree } from '@react-three/fiber'

import {STLLoader} from "three/examples/jsm/loaders/STLLoader";

import {Canvas, useLoader} from "react-three-fiber";
import { DataUtils } from "three";

// <Box position={[4,2,4]} color={"orange"}/>


const LoadObjectFromFile = ({objectFileNameArg, positionArg, scaleArg, rotationArg, colorArg}) => {

    console.log('objectFileNameArg', objectFileNameArg);
    console.log('positionArg', positionArg);
    console.log('scaleArg', scaleArg);
    console.log('rotationArg', rotationArg);
    console.log('colorArg', colorArg);

    // const geom = useLoader(STLLoader, "./White_Brick_2_3.stl");
    const geom = useLoader(STLLoader, objectFileNameArg);
    
    const ref = useRef();
    const {camera} = useThree();

    return (
        <>
            <mesh ref={ref} position={positionArg} scale={scaleArg}>
                <primitive object={geom} attach="geometry"/>
                <meshStandardMaterial color={colorArg}/>
            </mesh>
        </>
    );
   
};

const LoadObjectFromFile2 = () => {

};


export {LoadObjectFromFile, LoadObjectFromFile2};
// export default LoadObjectFromFile;