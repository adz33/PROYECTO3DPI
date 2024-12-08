import { useEffect, useState ,useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useAvatar } from '../../../../context/AvatarContext';
import { OrbitControls, useKeyboardControls } from '@react-three/drei';

export default function CharacterController() {

    const { avatar, setAvatar } = useAvatar();
    const [sub, get] = useKeyboardControls()
    const [runSound] = useState(new Audio("/assets/sounds/run.wav"))
    const [play, setPlay] = useState(false)
    const [isJumping, setIsJumping] = useState(false);


    // Caminar
    useEffect(() => {
        const unsubscribe = sub(
            (state) => state.forward || state.backward || state.leftward || state.rightward,
            (pressed) => {
                setAvatar((prevAvatar) => ({ ...prevAvatar, animation: pressed ? "Walk" : "Idle" }));
                setPlay(pressed);
            }
        );
        return () => unsubscribe();
    }, [setAvatar, sub]);

    useEffect(() => {
        const unsubscribe = sub(
            (state) => (state.forward || state.backward || state.leftward || state.rightward) && state.run,
            (pressed) => {
                setAvatar((prevAvatar) => ({ ...prevAvatar, animation: pressed ? "Running" : "Idle" }));
                setPlay(pressed);
            }
        );
        return () => unsubscribe();
    }, [setAvatar, sub]);

    useEffect(() => {
        const unsubscribe = sub(
            (state) => state.jump && !isJumping,
            () => {
                setAvatar((prevAvatar) => ({ ...prevAvatar, animation: "Jump" }));
                setIsJumping(true);
                setTimeout(() => {
                    setAvatar((prevAvatar) => ({ ...prevAvatar, animation: "Idle" }));
                    setIsJumping(false);
                }, 1000); // Duración de la animación de salto en milisegundos (1 segundo)
            }
        );
        return () => unsubscribe();
    }, [setAvatar, sub, isJumping]);

    useEffect(() => {
        if (play) {
            runSound.currentTime = 0;
            runSound.volume = Math.random();
            runSound.play();
        } else {
            runSound.pause();
        }
    }, [play]);

    useFrame((state, delta) => {
        const { forward, backward, leftward, rightward } = get()
        if (forward || backward || leftward || rightward) {
            setPlay(true)
            
        } else {
            setPlay(false)
        }

        const pressed = get().back
    })

    return (

        null
    )
}
