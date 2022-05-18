import React from 'react';
import LegoStack from './legoStack';

const IllusionStairs = ({groupPosition}) => {
    const color1 = "red";
    const color2 = "green";
    const color3 = "yellow";
    const color4 = "cyan";
    return (
        <>
            <LegoStack
                startPos={[groupPosition[0]-10, 0, groupPosition[2]-6.8]}
                endPos={[groupPosition[0]-10, 0, groupPosition[2]-8.4]}
                rotation={[0,Math.PI,0]}
                nums={2}
                color={color1}/>
            <LegoStack 
                startPos={[groupPosition[0]-10, 0.5, groupPosition[2]-10]} 
                endPos={[groupPosition[0]-10, 5, groupPosition[2]-22]} 
                rotation={[0,Math.PI,0]} 
                nums={9}
                color={color1}/>
            <LegoStack
                startPos={[groupPosition[0]-11.8, 5.5, groupPosition[2]-23]}
                endPos={[groupPosition[0]-13.2, 5.5, groupPosition[2]-23]}
                rotation={[0,Math.PI/2,0]}
                nums={2}
                color={color2}/>
            <LegoStack 
                startPos={[groupPosition[0]-15, 6, groupPosition[2]-23]} 
                endPos={[groupPosition[0]-27, 10.5, groupPosition[2]-23]} 
                rotation={[0,Math.PI/2,0]}
                nums={9}
                color={color2}/>
            <LegoStack
                startPos={[groupPosition[0]-30, 11, groupPosition[2]-26.2]}
                endPos={[groupPosition[0]-30, 11, groupPosition[2]-24.6]}
                rotation={[0,0,0]}
                nums={2}
                color={color3}/>
            <LegoStack 
                startPos={[groupPosition[0]-30, 11.5, groupPosition[2]-23]} 
                endPos={[groupPosition[0]-30, 15.5, groupPosition[2]-11]} 
                rotation={[0,0,0]}
                nums={8}
                color={color3}/>
            <LegoStack
                startPos={[groupPosition[0]-30, 16.5, groupPosition[2]-6.2]}
                endPos={[groupPosition[0]-28.4, 16.5, groupPosition[2]-6.2]}
                rotation={[0,Math.PI/2,0]}
                nums={2}
                color={color4}/>
            <LegoStack 
                startPos={[groupPosition[0]-27, 17, groupPosition[2]-6.2]} 
                endPos={[groupPosition[0]-22, 19.5, groupPosition[2]-6.2]} 
                rotation={[0,Math.PI/2,0]}
                nums={5}
                color={color4}/>
        </>
    )
};

export default IllusionStairs;