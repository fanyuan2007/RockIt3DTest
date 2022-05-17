import React from 'react';
import Kitty from '../geometries/kitty';
import IllusionStairs from './illusionStairs';

const KittyClimbing = ({position}) => {
    
    return (
        <>
            <Kitty position={position} rotation={[0, -Math.PI, 0]}/>
            <IllusionStairs groupPosition={[-10, 0, -10]}/>
        </>
    );
};

export default KittyClimbing;