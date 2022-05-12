import React from 'react';

const DynamicObj = ({position, color}) => {
    

    return (
        <mesh position={position}>
            <boxBufferGeometry attach="geometry" args={[2,2,3]}/>
            <meshLambertMaterial attach="material" color={color} />
        </mesh>
    );
}

export default DynamicObj;