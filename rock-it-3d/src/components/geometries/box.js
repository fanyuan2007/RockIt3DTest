import React from 'react';

export default function Box({position, color, size}) {
    var boxSize = size || [1,1,1];
    return (
        <mesh position={position}>
            <boxBufferGeometry attach="geometry" args={boxSize}/>
            <meshLambertMaterial attach="material" color={color} />
        </mesh>
    )
}