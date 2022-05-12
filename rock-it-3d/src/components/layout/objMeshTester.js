import React from "react";
import { ObjMeshLoadWrapper } from "./util";
import CadillacMesh from '../../assets/obj/Cadillac_75_Sedan.obj';
import CadillacTexture from '../../assets/obj/Body_Metallic.png';

const ObjMeshTester = () => {
    return (
        <>
            <ObjMeshLoadWrapper 
                meshFilename={CadillacMesh}
                textureFilename={CadillacTexture}
                position={[-30,0,0]}
                scale={[0.1,0.1,0.1]}
                />
        </>
    );
}

export default ObjMeshTester;