import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const TruckAnimation3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x1a1410);

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 30, 20);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffc107, 0.8);
    directionalLight.position.set(20, 40, 20);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x8b6f47, 0.6);
    pointLight.position.set(-20, 20, 20);
    scene.add(pointLight);

    // Grid (simulating road from top view)
    const gridHelper = new THREE.GridHelper(80, 20, 0x8b6f47, 0x6b513a);
    gridHelper.position.y = -2;
    scene.add(gridHelper);

    // Create a truck (simplified X-ray style)
    const createTruck = (xPosition: number, color: number, opacity: number) => {
      const truckGroup = new THREE.Group();

      // Cabin (front)
      const cabinGeometry = new THREE.BoxGeometry(4, 6, 4);
      const cabinMaterial = new THREE.MeshStandardMaterial({
        color,
        emissive: 0x8b6f47,
        emissiveIntensity: 0.3,
        transparent: true,
        opacity,
        wireframe: true,
      });
      const cabin = new THREE.Mesh(cabinGeometry, cabinMaterial);
      cabin.position.y = 3;
      cabin.castShadow = true;
      cabin.receiveShadow = true;
      truckGroup.add(cabin);

      // Cargo area (main body)
      const cargoGeometry = new THREE.BoxGeometry(5, 5, 16);
      const cargoMaterial = new THREE.MeshStandardMaterial({
        color,
        emissive: 0xb8915c,
        emissiveIntensity: 0.2,
        transparent: true,
        opacity: opacity * 0.7,
        wireframe: true,
      });
      const cargo = new THREE.Mesh(cargoGeometry, cargoMaterial);
      cargo.position.y = 2.5;
      cargo.position.z = 6;
      cargo.castShadow = true;
      cargo.receiveShadow = true;
      truckGroup.add(cargo);

      // Front wheels
      const wheelGeometry = new THREE.CylinderGeometry(1.5, 1.5, 1.5, 16);
      const wheelMaterial = new THREE.MeshStandardMaterial({
        color: 0x2a2622,
        emissive: 0x54402f,
        emissiveIntensity: 0.2,
        wireframe: true,
      });

      for (let i = -1; i <= 1; i += 2) {
        const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(i * 2, 1.5, -3);
        wheel.castShadow = true;
        truckGroup.add(wheel);
      }

      // Rear wheels (double)
      for (let i = -1; i <= 1; i += 2) {
        for (let z of [8, 10]) {
          const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
          wheel.rotation.z = Math.PI / 2;
          wheel.position.set(i * 2, 1.5, z);
          wheel.castShadow = true;
          truckGroup.add(wheel);
        }
      }

      truckGroup.position.x = xPosition;

      return truckGroup;
    };

    // Create multiple trucks
    const truck1 = createTruck(-15, 0xb8915c, 0.8);
    const truck2 = createTruck(0, 0x8c6843, 0.7);
    const truck3 = createTruck(15, 0xc9a87f, 0.9);

    scene.add(truck1);
    scene.add(truck2);
    scene.add(truck3);

    // Animation loop
    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      // Move trucks (circular motion)
      const speed = 0.02;
      const radius = 20;

      truck1.position.x = Math.sin((frame * speed) / 1) * radius - 15;
      truck1.position.z = Math.cos((frame * speed) / 1) * radius;
      truck1.rotation.y = Math.atan2(
        Math.cos((frame * speed) / 1) * radius,
        Math.sin((frame * speed) / 1) * radius
      );

      truck2.position.x = Math.sin((frame * speed) / 1 + Math.PI * 0.66) * radius;
      truck2.position.z =
        Math.cos((frame * speed) / 1 + Math.PI * 0.66) * radius;
      truck2.rotation.y = Math.atan2(
        Math.cos((frame * speed) / 1 + Math.PI * 0.66) * radius,
        Math.sin((frame * speed) / 1 + Math.PI * 0.66) * radius
      );

      truck3.position.x = Math.sin((frame * speed) / 1 + Math.PI * 1.33) * radius + 15;
      truck3.position.z =
        Math.cos((frame * speed) / 1 + Math.PI * 1.33) * radius;
      truck3.rotation.y = Math.atan2(
        Math.cos((frame * speed) / 1 + Math.PI * 1.33) * radius,
        Math.sin((frame * speed) / 1 + Math.PI * 1.33) * radius
      );

      // Slight camera rotation
      camera.position.x = Math.sin(frame * 0.001) * 5;

      renderer.render(scene, camera);
      frame++;
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen relative bg-gradient-dark flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-float">
            <span className="gradient-text-caldeira"></span>
          </h1>
          <p className="text-lg md:text-2xl text-caldeira-300 mb-8">
            Beneficios para sua frota.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TruckAnimation3D;
