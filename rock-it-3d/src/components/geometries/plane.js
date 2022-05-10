import React from 'react'

export function Plane(){
    return (
        <mesh position={[0,0,0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry args={[100,100]}/>
            <meshLambertMaterial color="lightblue" />
        </mesh>
    );
}