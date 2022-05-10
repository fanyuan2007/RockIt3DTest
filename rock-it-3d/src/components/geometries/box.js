import React from 'react'
export default function Box({position}) {
    return (
        <mesh position={position}>
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color={0x0ff000} />
        </mesh>
    )
}