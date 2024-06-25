'use client';

import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useLoader } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    Cylinder001: THREE.Mesh;
    Cylinder001_1: THREE.Mesh;
    Cylinder005: THREE.Mesh;
    Cylinder005_1: THREE.Mesh;
    main_body_black_All_Baked: THREE.Mesh;
  };
  materials: {
    ['Body upper.001']: THREE.MeshStandardMaterial;
    plastic: THREE.MeshPhysicalMaterial;
    ['plastic.002']: THREE.MeshPhysicalMaterial;
    ['BAKED BLACK']: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements['group'] | any) {
  const modelRef = useRef<THREE.Group>(null);

  const texture = useTexture(props.item.img.src) as THREE.Texture;

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.flipY = false; // Blender's textures might need this setting

  const { nodes, materials } = useGLTF('/model/coffeemachine to BAKE 2.glb') as GLTFResult;

  useEffect(() => {
    if (modelRef.current)
      modelRef.current.children.forEach((child: any) => {
        // console.log(child);
        // console.log(child)
        if (child.children[0].name === 'back_water_holder') {
          // console.log(child);

          child.children[0].children[1].material = new THREE.MeshPhysicalMaterial();
          child.children[0].children[1].material.roughness = 0.15;
          child.children[0].children[1].material.color.set('#fff');
          child.children[0].children[1].material.ior = 3;
          child.children[0].children[1].material.transmission = 1;
          child.children[0].children[1].material.opacity = 0;
        }
      });
  }, [materials]);

  return (
    <group {...props} dispose={null} scale={0.59} ref={modelRef}>
      <group name="Scene">
        <group name="back_water_holder" position={[0.064, 2.73, 0.526]} rotation={[0, 1.567, 0]}>
          <mesh
            name="Cylinder001"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials['Body upper.001']}
          />
          <mesh
            name="Cylinder001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_1.geometry}
            material={materials.plastic}
          />
        </group>
        <group name="knob" position={[0.064, 2.73, 0.526]} rotation={[0, 1.567, 0]}>
          <mesh
            name="Cylinder005"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005.geometry}
            material={materials.plastic}
          />
          <mesh
            name="Cylinder005_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_1.geometry}
            material={materials['plastic.002']}
          />
        </group>
        <mesh
          name="main_body_black_All_Baked"
          castShadow
          receiveShadow
          geometry={nodes.main_body_black_All_Baked.geometry}
          material={materials['BAKED BLACK']}
          position={[0.064, 2.73, 0.526]}
          rotation={[0, 1.567, 0]}
        >
          <meshStandardMaterial map={texture} roughness={1} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload('/model/coffeemachine to BAKE 2.glb');
