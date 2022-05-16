import React from 'react';
import {LoadObjectFromFile} from './util';

const LegoStack = ({startPos, endPos, scale, nums, rotation, color}) => {
    if (nums > 1)
    {
        const legoSrcFilename = './assets/stl/300101_white_brick_2_x_4.stl';
        const curScale = scale || [0.1,0.05,0.1];

        const xShift = (endPos[0] - startPos[0])/(nums-1);
        const yShift = (endPos[1] - startPos[1])/(nums-1);
        const zShift = (endPos[2] - startPos[2])/(nums-1);

        const legoStacks = [...Array(nums).keys()].map(
            i => {
                var curPos = [
                    startPos[0] + i * xShift,
                    startPos[1] + i * yShift,
                    startPos[2] + i * zShift
                ];
                return (
                    <>
                    <LoadObjectFromFile
                        objectFileNameArg={legoSrcFilename}
                        positionArg={curPos}
                        scaleArg={curScale}
                        rotationArg={rotation}
                        colorArg={color}
                        />
                    </>
                )
            }
        );

        return legoStacks;
    }
    
    return <></>;
};

export default LegoStack;