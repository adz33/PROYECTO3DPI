import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import "./ErosionAnimation.css";
const ErosionAnimation = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Escena, cámara y renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Configuración de partículas
    const particleCount = 1500;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x8b4513, // Marrón para representar tierra
      size: 0.05,
    });

    // Generar partículas en posiciones aleatorias
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10; // Distribuir partículas aleatoriamente
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Animación de partículas (simulando viento y caída)
    const animateParticles = () => {
      const positions = particlesGeometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const index = i * 3;

        // Movimiento horizontal por viento
        positions[index] += Math.random() * 0.02 - 0.01;

        // Movimiento hacia abajo (gravedad)
        positions[index + 1] -= Math.random() * 0.02;

        // Reinicio de partículas fuera de la vista
        if (positions[index + 1] < -5) {
          positions[index + 1] = 5;
        }
        if (positions[index] > 5 || positions[index] < -5) {
          positions[index] = (Math.random() - 0.5) * 10;
        }
      }
      particlesGeometry.attributes.position.needsUpdate = true;
    };

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      animateParticles();
      renderer.render(scene, camera);
    };
    animate();

    // Limpiar recursos al desmontar el componente
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
};

export default ErosionAnimation;
