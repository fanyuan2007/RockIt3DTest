import React from "react";
import Box from '../geometries/box';

const SEWorld = () => {
    return (
        <>
            <Box position={[4,2,4]} color={"orange"}/>
            <Box position={[2,2,4]} color={"orange"}/>
        </>
    );
}

export default SEWorld;