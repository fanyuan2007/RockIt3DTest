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



const SWWorld = () => {



    const geom = useLoader(STLLoader, "./White_Brick_2_3.stl");



    const ref = useRef();

    const {camera} = useThree();

    useEffect(() => {

        camera.lookAt(ref.current.position);

    });



    return (

        <>

            <mesh ref={ref} position={[0,0,0]} scale={[0.1, 0.1, 0.1]}>

                <primitive object={geom} attach="geometry"/>

                <meshStandardMaterial color={"orange"}/>

            </mesh>

            <ambientLight/>

            <pointLight position={[10, 10, 10]}/>

        </>

    );

};

export default SWWorld;