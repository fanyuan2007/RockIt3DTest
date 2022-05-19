import React from 'react';

import { useEffect, useRef, useMemo } from "react";

import { useThree } from '@react-three/fiber';
import {useTexture} from '@react-three/drei';

import {STLLoader} from "three/examples/jsm/loaders/STLLoader";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

import {Canvas, useLoader} from "react-three-fiber";
import { DataUtils, Vector3, Mesh } from "three";

// <Box position={[4,2,4]} color={"orange"}/>


const LoadObjectFromFile = ({objectFileNameArg, positionArg, scaleArg, rotationArg, colorArg}) => {
/*
    console.log('objectFileNameArg', objectFileNameArg);
    console.log('positionArg', positionArg);
    console.log('scaleArg', scaleArg);
    console.log('rotationArg', rotationArg);
    console.log('colorArg', colorArg);
*/
    const geom = useLoader(STLLoader, objectFileNameArg);
    
    const ref = useRef();
    const {camera} = useThree();
    const curScale = scaleArg || [1,1,1];
    
     useEffect(() => {
        //console.log('ref.current.position', ref.current.position);
        //const vec1 = new Vector3(0, 1000, 10000);
        // console.log('camera before', { camera });
        // console.log('camera position before', camera.position);
        // camera.lookAt(ref.current.position);
        // camera.lookAt(vec1);

        //camera.translateX(50);

        // camera.rotateY(60);
        //camera.updateProjectionMatrix();

        // console.log('camera position after', { camera }.camera.position);
    }); 

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

const ObjMeshLoadWrapper = ({meshFilename, textureFilename, position, rotation, scale}) => {
    const materials = useLoader(MTLLoader, textureFilename);
    const obj = useLoader(OBJLoader, meshFilename, loader => {
        materials.preload();
        loader.setMaterials(materials)
    });
    return (
        <mesh scale={scale} position={position} rotation={rotation}>
            <primitive object={obj} />
            <meshPhysicalMaterial 
                color={"red"}/>
        </mesh>
  );
};


export {LoadObjectFromFile, LoadObjectFromFile2, ObjMeshLoadWrapper};