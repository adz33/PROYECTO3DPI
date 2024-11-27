import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const CharacterController = ({ character }) => {
  const characterRef = useRef();
  const keys = useRef({ forward: false, backward: false, left: false, right: false });
  const { camera } = useThree();

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'w':
        keys.current.forward = true;
        break;
      case 's':
        keys.current.backward = true;
        break;
      case 'a':
        keys.current.left = true;
        break;
      case 'd':
        keys.current.right = true;
        break;
      default:
        break;
    }
  };

  const handleKeyUp = (event) => {
    switch (event.key) {
      case 'w':
        keys.current.forward = false;
        break;
      case 's':
        keys.current.backward = false;
        break;
      case 'a':
        keys.current.left = false;
        break;
      case 'd':
        keys.current.right = false;
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame((state, delta) => {
    if (!characterRef.current) return;

    const speed = 5;
    const direction = new THREE.Vector3();

    if (keys.current.forward) direction.z -= speed * delta;
    if (keys.current.backward) direction.z += speed * delta;
    if (keys.current.left) direction.x -= speed * delta;
    if (keys.current.right) direction.x += speed * delta;

    characterRef.current.position.add(direction);

    // Update camera position to follow the character
    camera.position.lerp(
      new THREE.Vector3(
        characterRef.current.position.x,
        characterRef.current.position.y + 2,
        characterRef.current.position.z + 5
      ),
      0.1
    );
    camera.lookAt(characterRef.current.position);
  });

  return (
    <group ref={characterRef}>
      {character}
    </group>
  );
};

export default CharacterController;
