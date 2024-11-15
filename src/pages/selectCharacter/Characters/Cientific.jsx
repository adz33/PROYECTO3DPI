import React from 'react';
import { useGLTF } from "@react-three/drei";

const Cientific = (props) => {
    const { nodes, materials} = useGLTF('/characters/Avatars/Cientific.glb');
    return (
<group {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.002}>
          <skinnedMesh
            name="Caot_botons"
            geometry={nodes.Caot_botons.geometry}
            material={materials.boton_material}
            skeleton={nodes.Caot_botons.skeleton}
          />
          <skinnedMesh
            name="Cientific_Body"
            geometry={nodes.Cientific_Body.geometry}
            material={materials.coat_material}
            skeleton={nodes.Cientific_Body.skeleton}
          />
          <skinnedMesh
            name="Cientific_eyes"
            geometry={nodes.Cientific_eyes.geometry}
            material={materials.eyes_material}
            skeleton={nodes.Cientific_eyes.skeleton}
          />
          <skinnedMesh
            name="Cientific_Hair"
            geometry={nodes.Cientific_Hair.geometry}
            material={materials.hair_material}
            skeleton={nodes.Cientific_Hair.skeleton}
          />
          <skinnedMesh
            name="Cientific_hands"
            geometry={nodes.Cientific_hands.geometry}
            material={materials.piel}
            skeleton={nodes.Cientific_hands.skeleton}
          />
          <skinnedMesh
            name="Cientific_Head"
            geometry={nodes.Cientific_Head.geometry}
            material={materials.piel}
            skeleton={nodes.Cientific_Head.skeleton}
          />
          <skinnedMesh
            name="Cientific_legs"
            geometry={nodes.Cientific_legs.geometry}
            material={materials.legs_material}
            skeleton={nodes.Cientific_legs.skeleton}
          />
          <skinnedMesh
            name="Cientific_shoes"
            geometry={nodes.Cientific_shoes.geometry}
            material={materials.shoes_material}
            skeleton={nodes.Cientific_shoes.skeleton}
          />
          <skinnedMesh
            name="corbatin"
            geometry={nodes.corbatin.geometry}
            material={materials.corbatin_material}
            skeleton={nodes.corbatin.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>

);
}

export default Cientific;

useGLTF.preload('characters/Avatars/Cientific.glb');

