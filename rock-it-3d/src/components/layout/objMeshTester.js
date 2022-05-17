import React from "react";
import { ObjMeshLoadWrapper } from "./util";
import G70Mesh from '../../assets/obj/G70_modified_obj.obj';
import G70Texture from '../../assets/obj/G70_modified_obj.mtl';

const ObjMeshTester = ({position}) => {
    return (
        <>
            <ObjMeshLoadWrapper 
                meshFilename={G70Mesh}
                textureFilename={G70Texture}
                position={position}
                rotation={[0,Math.PI/4, 0]}
                scale={[0.05,0.05,0.05]}
                />
        </>
    );
}

export default ObjMeshTester;