import React from 'react';
import { extend } from 'react-three-fiber';
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import Roboto from '../../assets/Roboto Black_Regular.json';

const TextGeom = ({position, text, size, height}) => {
    const font = new FontLoader().parse(Roboto);
    extend({TextGeometry});
    return (
        <mesh position={position}>
            <textGeometry args={[text, {font, size: size, height: height}]} />
            <meshPhysicalMaterial attach='material' color="brown" />
        </mesh>
    );
};

export default TextGeom;