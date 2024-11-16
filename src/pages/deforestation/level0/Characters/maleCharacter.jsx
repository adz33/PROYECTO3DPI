import React from 'react';
import { useGLTF } from "@react-three/drei";

const maleCharacter = (props) => {
    const { nodes, materials} = useGLTF('/characters/Avatars/maleCharacter.glb');
    return (
        <group {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.002}>
                    <skinnedMesh
            name="Engineer_eyes"
            geometry={nodes.Engineer_eyes.geometry}
            material={materials.eyes_material}
            skeleton={nodes.Engineer_eyes.skeleton}
          />
          <skinnedMesh
            name="Engineer_foots"
            geometry={nodes.Engineer_foots.geometry}
            material={materials.foot_material}
            skeleton={nodes.Engineer_foots.skeleton}
          />
          <skinnedMesh
            name="Engineer_hands"
            geometry={nodes.Engineer_hands.geometry}
            material={materials.Piel}
            skeleton={nodes.Engineer_hands.skeleton}
          />
          <skinnedMesh
            name="Engineer_head"
            geometry={nodes.Engineer_head.geometry}
            material={materials.piel}
            skeleton={nodes.Engineer_head.skeleton}
          />
          <skinnedMesh
            name="Engineer_helmet"
            geometry={nodes.Engineer_helmet.geometry}
            material={materials.helmet_material}
            skeleton={nodes.Engineer_helmet.skeleton}
          />
          <skinnedMesh
            name="Engineer_Pants"
            geometry={nodes.Engineer_Pants.geometry}
            material={materials.pants_material}
            skeleton={nodes.Engineer_Pants.skeleton}
          />
          <skinnedMesh
            name="Enginerr_body"
            geometry={nodes.Enginerr_body.geometry}
            material={materials['body_material.001']}
            skeleton={nodes.Enginerr_body.skeleton}
          />
          <skinnedMesh
            name="glases_body"
            geometry={nodes.glases_body.geometry}
            material={materials.glasses_material}
            skeleton={nodes.glases_body.skeleton}
          />
          <skinnedMesh
            name="glasses_arms"
            geometry={nodes.glasses_arms.geometry}
            material={materials.glasses_material}
            skeleton={nodes.glasses_arms.skeleton}
          />
          <skinnedMesh
            name="Hammer_head"
            geometry={nodes.Hammer_head.geometry}
            material={materials.hammer_head_m}
            skeleton={nodes.Hammer_head.skeleton}
          />
          <skinnedMesh
            name="Hammer_stick"
            geometry={nodes.Hammer_stick.geometry}
            material={materials.hammer_stick_m}
            skeleton={nodes.Hammer_stick.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
);
}

export default maleCharacter;

useGLTF.preload('characters/Avatars/maleCharacter.glb');

