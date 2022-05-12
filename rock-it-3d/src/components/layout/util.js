import React from 'react';

import { useEffect, useRef } from "react";

import { useThree } from '@react-three/fiber'

import {STLLoader} from "three/examples/jsm/loaders/STLLoader";

import {Canvas, useLoader} from "react-three-fiber";
import { DataUtils, Vector3 } from "three";

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

/*     useEffect(() => {
        console.log('ref.current.position', ref.current.position);

        const vec1 = new Vector3(0, 1000, 10000);
        //console.log('camera before', { camera });
        //console.log('camera position before', camera.position);

        
        // camera.lookAt(ref.current.position);
        // camera.lookAt(vec1);

        camera.translateX(50);


        // camera.rotateY(60);
        camera.updateProjectionMatrix();

        console.log('camera position after', { camera }.camera.position);
    }); */

    return (
        <>
            <mesh ref={ref} position={positionArg} scale={scaleArg} rotation={rotationArg}>
                <primitive object={geom} attach="geometry"/>
                <meshStandardMaterial color={colorArg} />
            </mesh>
        </>
    );
   
};

const LoadObjectFromFile2 = () => {

};


export {LoadObjectFromFile, LoadObjectFromFile2};