'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check mobile
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;

    // Set up WebGL Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 250;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return; // Fallback gracefully if WebGL not supported
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create Neural Particles Geometry
    const particleCount = isMobile ? 40 : 110;
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    const radius = isMobile ? 120 : 160;

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * radius;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      velocities.push({
        x: (Math.random() - 0.5) * 0.25,
        y: (Math.random() - 0.5) * 0.25,
        z: (Math.random() - 0.5) * 0.25,
      });
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    // Particle Texture Dot Material
    const pMaterial = new THREE.PointsMaterial({
      color: new THREE.Color('#00F0FF'),
      size: isMobile ? 3 : 4,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const pointCloud = new THREE.Points(particleGeometry, pMaterial);
    scene.add(pointCloud);

    // Line Connections Geometry
    const maxLines = (particleCount * (particleCount - 1)) / 2;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions, 3)
    );
    lineGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(lineColors, 3)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });

    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // Mouse Tracking for Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX - window.innerWidth / 2) * 0.001;
      mouse.targetY = (e.clientY - window.innerHeight / 2) * 0.001;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Scroll Tracking
    let targetScrollY = 0;
    const handleScroll = () => {
      targetScrollY = window.scrollY * 0.1;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const colorCyan = new THREE.Color('#00F0FF');
    const colorIndigo = new THREE.Color('#6366F1');

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Rotate group
      pointCloud.rotation.y += 0.0015;
      pointCloud.rotation.x += 0.0008;
      lineMesh.rotation.y = pointCloud.rotation.y;
      lineMesh.rotation.x = pointCloud.rotation.x;

      scene.rotation.y = mouse.x;
      scene.rotation.x = mouse.y;
      camera.position.z = 250 + targetScrollY * 0.5;

      // Update particle positions
      const posAttr = particleGeometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        let px = posArray[i * 3];
        let py = posArray[i * 3 + 1];
        let pz = posArray[i * 3 + 2];

        px += velocities[i].x;
        py += velocities[i].y;
        pz += velocities[i].z;

        // Keep within bounds
        const d = Math.sqrt(px * px + py * py + pz * pz);
        if (d > radius) {
          velocities[i].x *= -1;
          velocities[i].y *= -1;
          velocities[i].z *= -1;
        }

        posArray[i * 3] = px;
        posArray[i * 3 + 1] = py;
        posArray[i * 3 + 2] = pz;
      }
      posAttr.needsUpdate = true;

      // Re-calculate line connections
      let lineIndex = 0;
      const connectDist = isMobile ? 70 : 95;

      for (let i = 0; i < particleCount; i++) {
        const x1 = posArray[i * 3];
        const y1 = posArray[i * 3 + 1];
        const z1 = posArray[i * 3 + 2];

        for (let j = i + 1; j < particleCount; j++) {
          const x2 = posArray[j * 3];
          const y2 = posArray[j * 3 + 1];
          const z2 = posArray[j * 3 + 2];

          const dx = x1 - x2;
          const dy = y1 - y2;
          const dz = z1 - z2;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectDist) {
            const alpha = (1.0 - dist / connectDist) * 0.5;

            linePositions[lineIndex * 3] = x1;
            linePositions[lineIndex * 3 + 1] = y1;
            linePositions[lineIndex * 3 + 2] = z1;

            linePositions[lineIndex * 3 + 3] = x2;
            linePositions[lineIndex * 3 + 4] = y2;
            linePositions[lineIndex * 3 + 5] = z2;

            const c = colorCyan.clone().lerp(colorIndigo, dist / connectDist);
            lineColors[lineIndex * 3] = c.r * alpha;
            lineColors[lineIndex * 3 + 1] = c.g * alpha;
            lineColors[lineIndex * 3 + 2] = c.b * alpha;

            lineColors[lineIndex * 3 + 3] = c.r * alpha;
            lineColors[lineIndex * 3 + 4] = c.g * alpha;
            lineColors[lineIndex * 3 + 5] = c.b * alpha;

            lineIndex += 2;
          }
        }
      }

      lineGeometry.setDrawRange(0, lineIndex);
      (lineGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      (lineGeometry.attributes.color as THREE.BufferAttribute).needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}
