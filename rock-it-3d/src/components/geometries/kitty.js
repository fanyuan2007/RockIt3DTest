import React from 'react';
import {LoadObjectFromFile} from '../layout/util';

const Kitty = ({position, rotation, color}) => {
    const kittySrcFile = "./assets/stl/Unikitty.stl";
    const curRotation = rotation || [0,0,0];
    const curColor = color || "pink";
    return (
        <LoadObjectFromFile 
            objectFileNameArg={kittySrcFile} 
            positionArg={position}
            rotationArg={curRotation}
            colorArg={curColor}/>
    );
};

export default Kitty;