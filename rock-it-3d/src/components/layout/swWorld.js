import React from "react";
import Box from '../geometries/box';

const SWWorld = () => {
    return (
        <>
            <Box position={[-2,2,4]} color={"pink"}/>
            <Box position={[-4,2,4]} color={"pink"}/>
        </>
    );
}

export default SWWorld;