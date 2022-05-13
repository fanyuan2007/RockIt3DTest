import React from 'react';
import Kitty from '../geometries/kitty';

const KittyClimbing = ({position}) => {
    // Todo: add stairs here to make kitty stepping on stairs
    return (
        <Kitty position={position}/>
    );
};

export default KittyClimbing;