import React from 'react';

export function Plane({position, color}){
    return (
        <mesh position={position} rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry args={[100,100]}/>
            <meshLambertMaterial color={color} />
        </mesh>
    );
}