import React from 'react'
export default function Box({position, color}) {
    return (
        <mesh position={position}>
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color={color} />
        </mesh>
    )
}