import React from 'react';
import Box from '../geometries/box';

const BoxStack = ({startPos, endPos, size, num, color}) => {
    if (num > 1)
    {
        const xShift = (endPos[0] - startPos[0])/(num-1);
        const yShift = (endPos[1] - startPos[1])/(num-1);
        const zShift = (endPos[2] - startPos[2])/(num-1);
        
        const boxStacks = [...Array(num).keys()].map(
            i => {
                var curPos = [
                    startPos[0] + i*xShift,
                    startPos[1] + i*yShift,
                    startPos[2] + i*zShift];
                //console.log("curPos: ", curPos);
                return <Box position={curPos} color={color} size={size}/>;
            }
        );

        return boxStacks;
    }
    
    return <></>;
};

export default BoxStack;