import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/ImageToStl.com_earth_ball.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Node1.geometry} material={materials.x1} />
    </group>
  )
}

useGLTF.preload('/ImageToStl.com_earth_ball.glb')