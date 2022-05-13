import React from 'react';
import Box from '../geometries/box';
import BoxStack from './boxStack';

const Ground = () => {
    return (
        <>
            <Box position={[0,-0.1,0]} color={"grey"} size={[100,0.2,8]}/>
            <Box position={[0,-0.1,0]} color={"grey"} size={[8,0.2,100]}/>
            <BoxStack 
                startPos={[-6, 0.02, -3]}
                endPos={[-6, 0.02, 3]}
                size={[2, 0.04, 0.2]}
                num={7}
                color={"white"}/>
            <BoxStack 
                startPos={[6, 0.02, -3]}
                endPos={[6, 0.02, 3]}
                size={[2, 0.04, 0.2]}
                num={7}
                color={"white"}/>
            <BoxStack 
                startPos={[-3, 0.02, -6]}
                endPos={[3, 0.02, -6]}
                size={[0.2, 0.04, 2]}
                num={7}
                color={"white"}/>
            <BoxStack 
                startPos={[-3, 0.02, 6]}
                endPos={[3, 0.02, 6]}
                size={[0.2, 0.04, 2]}
                num={7}
                color={"white"}/>
        </>
    );
}


export default Ground;