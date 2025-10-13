import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HyperspeedBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Create a bunch of glowing trails
    const trails = [];
    const trailCount = 60;
    const geometry = new THREE.BufferGeometry();
    const points = new Float32Array(100 * 3); // placeholder geometry
    geometry.setAttribute("position", new THREE.BufferAttribute(points, 3));

    const colors = [0x00ffff, 0xff00ff, 0x00ccff, 0xff66cc];

    for (let i = 0; i < trailCount; i++) {
      const material = new THREE.LineBasicMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: 0.7,
      });

      const trail = new THREE.Line(geometry.clone(), material);
      trail.position.x = (Math.random() - 0.5) * 50;
      trail.position.y = (Math.random() - 0.5) * 50;
      trail.position.z = (Math.random() - 0.5) * 50;
      trails.push(trail);
      scene.add(trail);
    }

    camera.position.z = 30;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      trails.forEach((trail, i) => {
        trail.rotation.y += 0.002;
        trail.position.z += 0.3;
        if (trail.position.z > 40) trail.position.z = -40;
      });
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        overflow: "hidden",
      }}
    />
  );
}
