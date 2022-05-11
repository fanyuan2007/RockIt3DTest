import React from 'react';

import { useEffect, useRef } from "react";

import { useThree } from '@react-three/fiber'

import {STLLoader} from "three/examples/jsm/loaders/STLLoader";

import {Canvas, useLoader} from "react-three-fiber";
import { DataUtils } from "three";

const LoadObjectFromFile = ({objectFileNameArg, positionArg, scaleArg, rotationArg, colorArg}) => {

    console.log('objectFileNameArg', objectFileNameArg);
    console.log('positionArg', positionArg);
    console.log('scaleArg', scaleArg);
    console.log('rotationArg', rotationArg);
    console.log('colorArg', colorArg);

    const geom = useLoader(STLLoader, "./White_Brick_2_3.stl");
    // const geom = useLoader(STLLoader, objectFileNameArg);
    
    const ref = useRef();
    const {camera} = useThree();


/*     useEffect(() => {
        camera.lookAt(ref.current.position);
    });
 */
    // load_file_position_xyz_scale__rotate_color
    return (
        <>
            <mesh ref={ref} position={positionArg} scale={scaleArg}>
                <primitive object={geom} attach="geometry"/>
                <meshStandardMaterial color={colorArg}/>
            </mesh>

{/*             <ambientLight/>
            <pointLight position={[10, 10, 10]}/>
 */}            
        </>
    );
   
};

const LoadObjectFromFile2 = () => {

};


export {LoadObjectFromFile, LoadObjectFromFile2};
// export default LoadObjectFromFile;