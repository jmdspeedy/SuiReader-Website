import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { VOXEL_CONTENT } from '../constants';

const VoxelScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    let animationFrameId: number;

    // --- CONFIGURATION ---
    const VOXEL_SIZE = 1;
    const SCENE_COLORS = {
        sky: 0x12152b,
        mountainBase: 0x252d47, // Dark blue/grey
        mountainSnow: 0xffffff,
        hillNear: 0x2d6e75,     // Teal
        hillFar: 0x1f4a52,      // Darker Teal
        trainBody: 0xf0f0f0,
        trainStripe: 0x4aa3b5,
        star: 0x88ccff,
        cloud: 0x4a5c70
    };

    // --- SETUP ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(SCENE_COLORS.sky);
    scene.fog = new THREE.FogExp2(SCENE_COLORS.sky, 0.015);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    // Initial camera position (Desktop default)
    camera.position.set(0, 16, 64);

    const renderer = new THREE.WebGLRenderer({ 
        antialias: false, // Disable MSAA as we use post-processing
        alpha: true,
        powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for performance
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.maxPolarAngle = Math.PI / 2 - 0.05;
    
    // LOCK INTERACTIONS
    controls.enableZoom = false;
    controls.enableRotate = false;
    controls.enablePan = false;
    controls.autoRotate = false;

    // Allow vertical scrolling on mobile (must be set AFTER OrbitControls which sets it to 'none')
    renderer.domElement.style.touchAction = 'pan-y';

    // --- REUSABLE OBJECTS ---
    const boxGeometry = new THREE.BoxGeometry(VOXEL_SIZE, VOXEL_SIZE, VOXEL_SIZE);
    const dummy = new THREE.Object3D();
    const _color = new THREE.Color();

    // --- 1. STATIC TERRAIN (InstancedMesh) ---
    // We collect all static voxels (Fuji + Hills) into arrays first
    interface InstanceData { x: number; y: number; z: number; color: number; }
    const terrainInstances: InstanceData[] = [];

    const mtnRadius = 30;
    const mtnHeight = 22;

    // Mount Fuji Generation
    for (let x = -mtnRadius; x <= mtnRadius; x++) {
        for (let z = -mtnRadius; z <= mtnRadius; z++) {
            const dist = Math.sqrt(x*x + z*z);
            if (dist < mtnRadius) {
                const h = Math.max(0, Math.round((1 - Math.pow(dist / mtnRadius, 0.8)) * mtnHeight));
                if (h > 0) {
                    const noise = Math.sin(x * 0.5) * 2 + Math.cos(z * 0.5) * 2 + Math.sin((x+z)*0.8);
                    const snowThreshold = (mtnHeight * 0.45) + noise; 
                    const color = h > snowThreshold ? SCENE_COLORS.mountainSnow : SCENE_COLORS.mountainBase;
                    terrainInstances.push({ x, y: h - 10, z: z - 10, color });
                }
            }
        }
    }

    // Rolling Hills Generation
    for (let x = -40; x <= 40; x++) {
        for (let z = 10; z <= 30; z++) {
            const wave1 = Math.sin(x * 0.1) * 2;
            const wave2 = Math.cos(z * 0.2) * 2;
            const h = Math.floor(wave1 + wave2 - 8);
            const color = (z + Math.sin(x*0.2)*5) > 20 ? SCENE_COLORS.hillNear : SCENE_COLORS.hillFar;
            
            terrainInstances.push({ x, y: h, z, color });
            terrainInstances.push({ x, y: h - 1, z, color }); // Side filler
        }
    }

    // Create the InstancedMesh for Terrain
    const terrainMaterial = new THREE.MeshStandardMaterial({ 
        roughness: 0.8, 
        metalness: 0.1,
        color: 0xffffff // Base color, tinted by instance color
    });
    const terrainMesh = new THREE.InstancedMesh(boxGeometry, terrainMaterial, terrainInstances.length);
    terrainMesh.castShadow = true;
    terrainMesh.receiveShadow = true;

    terrainInstances.forEach((data, i) => {
        dummy.position.set(data.x * VOXEL_SIZE, data.y * VOXEL_SIZE, data.z * VOXEL_SIZE);
        dummy.updateMatrix();
        terrainMesh.setMatrixAt(i, dummy.matrix);
        _color.setHex(data.color);
        terrainMesh.setColorAt(i, _color);
    });
    
    terrainMesh.instanceMatrix.needsUpdate = true;
    if (terrainMesh.instanceColor) terrainMesh.instanceColor.needsUpdate = true;
    
    const worldGroup = new THREE.Group();
    worldGroup.add(terrainMesh);
    scene.add(worldGroup);

    // --- 2. CLOUDS (Separate InstancedMesh for Transparency) ---
    const cloudInstances: InstanceData[] = [];
    function addCloud(x: number, y: number, z: number) {
        const offsets = [
            {x:0, y:0}, {x:1, y:0}, {x:2, y:0},
            {x:1, y:1}, {x:2, y:1}, {x:3, y:1},
            {x:-1, y:-0.5} 
        ];
        offsets.forEach(o => {
            cloudInstances.push({ x: x + o.x, y: y + o.y, z, color: SCENE_COLORS.cloud });
        });
    }
    addCloud(-20, 15, -15);
    addCloud(20, 18, -15);
    addCloud(0, 22, -15);

    const cloudMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.8,
        transparent: true,
        opacity: 0.6
    });
    const cloudMesh = new THREE.InstancedMesh(boxGeometry, cloudMaterial, cloudInstances.length);
    
    cloudInstances.forEach((data, i) => {
        dummy.position.set(data.x * VOXEL_SIZE, data.y * VOXEL_SIZE, data.z * VOXEL_SIZE);
        dummy.updateMatrix();
        cloudMesh.setMatrixAt(i, dummy.matrix);
        _color.setHex(data.color);
        cloudMesh.setColorAt(i, _color);
    });
    worldGroup.add(cloudMesh);

    // --- 3. STARS (InstancedMesh) ---
    const starCount = 100;
    const starGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5); // Smaller geometry
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const starsMesh = new THREE.InstancedMesh(starGeometry, starMaterial, starCount);
    
    for(let i=0; i<starCount; i++) {
        const x = (Math.random() - 0.5) * 100;
        const y = (Math.random()) * 40 + 10;
        const z = (Math.random() - 0.5) * 50 - 20;
        dummy.position.set(x, y, z);
        dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        dummy.updateMatrix();
        starsMesh.setMatrixAt(i, dummy.matrix);
    }
    scene.add(starsMesh); // Add directly to scene to rotate separately

    // --- 4. TRAIN (Group of meshes - Dynamic) ---
    const trainGroup = new THREE.Group();
    scene.add(trainGroup); 

    // Reuse materials for train
    const matTrainBody = new THREE.MeshStandardMaterial({ color: SCENE_COLORS.trainBody, roughness: 0.5 });
    const matTrainStripe = new THREE.MeshStandardMaterial({ color: SCENE_COLORS.trainStripe, roughness: 0.5 });
    const matTrainWin = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.2 });

    function createTrainPart(material: THREE.Material, x: number, y: number, z: number, sx=1, sy=1, sz=1) {
        const mesh = new THREE.Mesh(boxGeometry, material);
        mesh.position.set(x, y, z);
        mesh.scale.set(sx, sy, sz);
        mesh.castShadow = true;
        trainGroup.add(mesh);
    }

    function buildTrain() {
        const length = 18;
        const yPos = -7;
        const zPos = 22;

        for (let i = 0; i < length; i++) {
            const isNose = i === length - 1;
            const isTail = i === 0;
            
            // Body
            createTrainPart(matTrainBody, i, yPos, zPos);
            createTrainPart(matTrainBody, i, yPos+1, zPos);
            createTrainPart(matTrainStripe, i, yPos-1, zPos);

            if (!isNose && !isTail && i % 2 !== 0) {
                 createTrainPart(matTrainWin, i, yPos, zPos + 0.1, 0.8, 0.6, 1);
            }
            if (isNose) {
                createTrainPart(matTrainBody, i+1, yPos-1, zPos);
            }
        }
    }
    buildTrain();
    trainGroup.position.x = -50;

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0x404040, 2); 
    scene.add(ambientLight);

    const moonLight = new THREE.DirectionalLight(0xaaccff, 2.5);
    moonLight.position.set(20, 50, 20);
    moonLight.castShadow = true;
    moonLight.shadow.mapSize.width = 1024; // Reduced from 2048
    moonLight.shadow.mapSize.height = 1024;
    moonLight.shadow.camera.near = 0.5;
    moonLight.shadow.camera.far = 150;
    moonLight.shadow.camera.left = -50;
    moonLight.shadow.camera.right = 50;
    moonLight.shadow.camera.top = 50;
    moonLight.shadow.camera.bottom = -50;
    scene.add(moonLight);

    const bottomLight = new THREE.DirectionalLight(0x5e2a85, 1);
    bottomLight.position.set(0, -10, 10);
    scene.add(bottomLight);

    // --- POST PROCESSING ---
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0.6; 
    bloomPass.strength = 0.6;
    bloomPass.radius = 0.5;
    composer.addPass(bloomPass);

    const trainSpeed = 0.4;

    function animate() {
        animationFrameId = requestAnimationFrame(animate);
        
        // Animate Train
        trainGroup.position.x += trainSpeed;
        if (trainGroup.position.x > 60) {
            trainGroup.position.x = -60;
        }

        starsMesh.rotation.y += 0.0005;

        controls.update();
        composer.render();
    }

    animate();

    // --- RESPONSIVE LAYOUT LOGIC ---
    const handleResize = () => {
        if (!container) return;
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        
        // Adjust camera based on aspect ratio to prevent cramping on mobile
        const aspect = newWidth / newHeight;
        
        // If portrait (mobile), move camera back/up slightly
        if (aspect < 1) {
            camera.position.set(0, 25, 90);
        } else {
            camera.position.set(0, 16, 64);
        }

        camera.aspect = aspect;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
        composer.setSize(newWidth, newHeight);
    };
    
    // Call once on init to set correct initial position
    handleResize();
    
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        if (container && renderer.domElement) {
            container.removeChild(renderer.domElement);
        }
        renderer.dispose();
        
        // Dispose Geometries
        boxGeometry.dispose();
        starGeometry.dispose();
        
        // Dispose Materials
        terrainMaterial.dispose();
        cloudMaterial.dispose();
        starMaterial.dispose();
        matTrainBody.dispose();
        matTrainStripe.dispose();
        matTrainWin.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] bg-[#1a1e3b] overflow-hidden">
       <div ref={mountRef} className="w-full h-full" />
       
       {/* Overlay Content */}
       <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center px-4"
          >
             <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                {VOXEL_CONTENT.title}
             </h2>
             <p className="text-blue-200 text-lg md:text-xl max-w-xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                {VOXEL_CONTENT.description}
             </p>
          </motion.div>
       </div>
       
       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-dark-bg to-transparent pointer-events-none" />
       <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white dark:from-dark-bg to-transparent pointer-events-none" />
    </div>
  );
};

export default VoxelScene;