import React from "react";
import Box from '../geometries/box';

const NEWorld = () => {
    return (
        <>
            <Box position={[2,2,-4]} color={"red"}/>
            <Box position={[2,2,-2]} color={"red"}/>
        </>
    );
}

export default NEWorld;