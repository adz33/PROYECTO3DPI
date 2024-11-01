import { Preload, useGLTF } from "@react-three/drei";

const BranchesSoil=()=>{
    const branchesModel=useGLTF("models-3D/branches-medium.glb")
    console.log(branchesModel);
    return null(

    <mesh><primitive object={branchesModel.scene}/>

    </mesh>
    )
}

export default BranchesSoil;

useGLTF.preload("models-3D/branches-medium.glb");
