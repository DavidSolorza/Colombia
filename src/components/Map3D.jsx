import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Float } from '@react-three/drei';
import * as THREE from 'three';
import { regions, ethnicities } from '../data/ethnicities';

const PARTICLE_COUNT = 1000;
const particlePositionArray = new Float32Array(PARTICLE_COUNT * 3);
for (let i = 0; i < PARTICLE_COUNT; i++) {
  particlePositionArray[i * 3] = (Math.random() - 0.5) * 30;
  particlePositionArray[i * 3 + 1] = Math.random() * 10;
  particlePositionArray[i * 3 + 2] = (Math.random() - 0.5) * 20;
}

function RegionMesh({ region, isSelected, onClick, onHover }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  const color = useMemo(() => {
    if (isSelected) return '#fde68a';
    if (hovered) return '#e0e7ff';
    return region.color;
  }, [isSelected, hovered, region.color]);

  const position = useMemo(() => {
    const x = (region.coordinates.lng + 78) * 0.3;
    const y = 0;
    const z = (region.coordinates.lat - 2) * -0.3;
    return [x, y, z];
  }, [region.coordinates]);

  const scale = isSelected ? 1.2 : hovered ? 1.1 : 1;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onClick(region);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          onHover(region);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(null);
          document.body.style.cursor = 'auto';
        }}
        scale={scale}
      >
        <cylinderGeometry args={[1.5, 1.8, 0.5, 8]} />
        <meshStandardMaterial 
          color={color}
          metalness={0.3}
          roughness={0.7}
          emissive={isSelected ? region.color : '#000000'}
          emissiveIntensity={isSelected ? 0.3 : 0}
        />
      </mesh>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh position={[0, 1, 0]} scale={0.3}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </mesh>
      </Float>
      {(hovered || isSelected) && (
        <Html position={[0, 1.5, 0]} center>
          <div className="region-label" style={{
            background: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            border: `2px solid ${region.color}`,
            boxShadow: `0 0 20px ${region.color}40`
          }}>
            {region.name}
          </div>
        </Html>
      )}
    </group>
  );
}

function EthnicityMarker({ ethnicity, onClick }) {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef();
  
  const position = useMemo(() => {
    const x = (ethnicity.coordinates.lng + 78) * 0.3;
    const z = (ethnicity.coordinates.lat - 2) * -0.3;
    return [x, 1, z];
  }, [ethnicity.coordinates]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = 1 + Math.sin(state.clock.elapsedTime * 2 + ethnicity.coordinates.lng) * 0.1;
    }
  });

  const statusColor = {
    'Vulnerable': '#fcd34d',
    'En peligro': '#fca5a5',
    'En peligro crítico': '#fb7185'
  };

  return (
    <group ref={groupRef} position={position}>
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          onClick(ethnicity);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial 
          color={statusColor[ethnicity.status] || '#5eead4'}
          emissive={statusColor[ethnicity.status] || '#5eead4'}
          emissiveIntensity={hovered ? 0.8 : 0.4}
        />
      </mesh>
      {hovered && (
        <Html position={[0, 0.5, 0]} center>
          <div style={{
            background: 'rgba(0,0,0,0.9)',
            color: 'white',
            padding: '10px 14px',
            borderRadius: '8px',
            fontSize: '12px',
            minWidth: '150px',
            border: '1px solid #5eead4'
          }}>
            <strong style={{ color: statusColor[ethnicity.status] || '#5eead4' }}>
              {ethnicity.name}
            </strong>
            <div style={{ fontSize: '10px', marginTop: '4px', opacity: 0.8 }}>
              {ethnicity.population.toLocaleString()} personas
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}

function ColombiaMap({ selectedRegion, onRegionClick, onEthnicityClick, showEthnicities }) {
  return (
    <group>
      {regions.map((region) => (
        <RegionMesh
          key={region.id}
          region={region}
          isSelected={selectedRegion?.id === region.id}
          onClick={onRegionClick}
          onHover={() => {}}
        />
      ))}
      
      {showEthnicities && ethnicities.map((ethnicity) => (
        <EthnicityMarker
          key={ethnicity.id}
          ethnicity={ethnicity}
          onClick={onEthnicityClick}
        />
      ))}
    </group>
  );
}

function Particles() {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0003;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={particlePositionArray}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#7dd3fc" transparent opacity={0.65} />
    </points>
  );
}

export default function Map3D({ selectedRegion, onRegionClick, onEthnicityClick, showEthnicities }) {
  return (
    <Canvas
      camera={{ position: [0, 15, 15], fov: 45 }}
      style={{ background: 'linear-gradient(180deg, #1a1628 0%, #2d2648 55%, #352b52 100%)' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.55} color="#c4b5fd" />
      <spotLight position={[0, 20, 0]} intensity={0.5} />
      
      <ColombiaMap 
        selectedRegion={selectedRegion}
        onRegionClick={onRegionClick}
        onEthnicityClick={onEthnicityClick}
        showEthnicities={showEthnicities}
      />
      
      <Particles />
      
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={40}
        autoRotate={!selectedRegion}
        autoRotateSpeed={0.5}
      />
      
      <gridHelper args={[50, 50, '#3d3558', '#2f2850']} position={[0, -1, 0]} />
    </Canvas>
  );
}
