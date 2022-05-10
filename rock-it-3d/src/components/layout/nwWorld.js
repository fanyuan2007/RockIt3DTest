import React from "react";
import Box from '../geometries/box';

const NWWorld = () => {
    return (
        <>
            <Box position={[-2,2,-4]} color={"blue"}/>
            <Box position={[-2,2,-2]} color={"blue"}/>
        </>
    );
}

export default NWWorld;