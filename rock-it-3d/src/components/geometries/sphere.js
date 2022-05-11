import React from 'react'

const Sphere = ({position}) => {
    return (
        <mesh position={position}>
            <sphereBufferGeometry />
            <meshLambertMaterial wireframe={true}/>
        </mesh>
    );
}

export default Sphere;