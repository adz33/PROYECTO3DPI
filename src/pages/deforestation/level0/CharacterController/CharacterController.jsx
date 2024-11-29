import React, { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useAnimations } from '@react-three/drei';

const CharacterController = ({ characterRef, animations }) => {
    const { actions } = useAnimations(animations, characterRef);
    const [currentAction, setCurrentAction] = useState('idle');

    useEffect(() => {
        if (actions && actions[currentAction]) {
            actions[currentAction].reset().fadeIn(0.5).play();
        }

        return () => {
            if (actions && actions[currentAction]) {
                actions[currentAction].fadeOut(0.5);
            }
        };
    }, [currentAction, actions]);

    useFrame((state, delta) => {
        const { forward, backward, left, right } = state.controls;

        if (forward || backward || left || right) {
            if (currentAction !== 'walk') {
                setCurrentAction('walk');
            }
        } else {
            if (currentAction !== 'idle') {
                setCurrentAction('idle');
            }
        }
    });

    return null;
};

export default CharacterController;
