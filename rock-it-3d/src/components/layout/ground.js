import React from 'react';
import Sphere from '../geometries/sphere';
import {Plane} from '../geometries/plane';
import Box from '../geometries/box';

const Ground = () => {
    return (
        <>
            <Sphere position={[0,0,0]}/>
            <Box position={[0,-0.1,0]} color={"grey"} size={[100,0.2,8]}/>
            <Box position={[0,-0.1,0]} color={"grey"} size={[8,0.2,100]}/>
            <Box position={[-27,-0.1,-27]} color={"lightgrey"} size={[46,0.2,46]}/>
            <Box position={[27,-0.1,-27]} color={"lightgrey"} size={[46,0.2,46]}/>
            <Box position={[-27,-0.1,27]} color={"lightgrey"} size={[46,0.2,46]}/>
            <Box position={[27,-0.1,27]} color={"lightgrey"} size={[46,0.2,46]}/>
            <Box position={[-6,0.02,0]} color={"white"} size={[2,0.04,0.2]}/>
            <Box position={[-6,0.02,-1]} color={"white"} size={[2,0.04,0.2]}/>
            <Box position={[-6,0.02,1]} color={"white"} size={[2,0.04,0.2]}/>
            <Box position={[-6,0.02,-2]} color={"white"} size={[2,0.04,0.2]}/>
            <Box position={[-6,0.02,2]} color={"white"} size={[2,0.04,0.2]}/>
            <Box position={[-6,0.02,-3]} color={"white"} size={[2,0.04,0.2]}/>
            <Box position={[-6,0.02,3]} color={"white"} size={[2,0.04,0.2]}/>
            <Box position={[6,0.02,0]} color={"white"} size={[2,0.04,0.2]}/>
            <Box position={[6,0.02,-1]} color={"white"} size={[2,0.04,0.2]}/>
            <Box position={[6,0.02,1]} color={"white"} size={[2,0.04,0.2]}/>
            <Box position={[6,0.02,-2]} color={"white"} size={[2,0.04,0.2]}/>
            <Box position={[6,0.02,2]} color={"white"} size={[2,0.04,0.2]}/>
            <Box position={[6,0.02,-3]} color={"white"} size={[2,0.04,0.2]}/>
            <Box position={[6,0.02,3]} color={"white"} size={[2,0.04,0.2]}/>
            <Box position={[0,0.02,-6]} color={"white"} size={[0.2,0.04,2]}/>
            <Box position={[1,0.02,-6]} color={"white"} size={[0.2,0.04,2]}/>
            <Box position={[2,0.02,-6]} color={"white"} size={[0.2,0.04,2]}/>
            <Box position={[3,0.02,-6]} color={"white"} size={[0.2,0.04,2]}/>
            <Box position={[-1,0.02,-6]} color={"white"} size={[0.2,0.04,2]}/>
            <Box position={[-2,0.02,-6]} color={"white"} size={[0.2,0.04,2]}/>
            <Box position={[-3,0.02,-6]} color={"white"} size={[0.2,0.04,2]}/>
            <Box position={[0,0.02,6]} color={"white"} size={[0.2,0.04,2]}/>
            <Box position={[1,0.02,6]} color={"white"} size={[0.2,0.04,2]}/>
            <Box position={[2,0.02,6]} color={"white"} size={[0.2,0.04,2]}/>
            <Box position={[3,0.02,6]} color={"white"} size={[0.2,0.04,2]}/>
            <Box position={[-1,0.02,6]} color={"white"} size={[0.2,0.04,2]}/>
            <Box position={[-2,0.02,6]} color={"white"} size={[0.2,0.04,2]}/>
            <Box position={[-3,0.02,6]} color={"white"} size={[0.2,0.04,2]}/>
        </>
    );
}

export default Ground;