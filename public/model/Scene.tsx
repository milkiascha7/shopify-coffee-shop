'use client';

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Circle009: THREE.Mesh;
    Circle009_1: THREE.Mesh;
    bottom_mesh_top_holes003: THREE.Mesh;
    Cylinder003: THREE.Mesh;
    Cylinder003_1: THREE.Mesh;
    Cylinder003_2: THREE.Mesh;
    Cylinder003_3: THREE.Mesh;
  };
  materials: {
    ['Low machine buttons.002']: THREE.MeshStandardMaterial;
    ['low body body']: THREE.MeshPhysicalMaterial;
    Body: THREE.MeshStandardMaterial;
    ['Body upper.001']: THREE.MeshStandardMaterial;
    plastic: THREE.MeshPhysicalMaterial;
    ['top body']: THREE.MeshStandardMaterial;
    ['low body body.001']: THREE.MeshPhysicalMaterial;
  };
};

export default function Model(props: any) {
  const { nodes, materials } = useGLTF('/model/coffeemachine.glb') as GLTFResult;

  // const texture = useTexture(props.item.img);
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group
          name="bottom_mesh_with_button003"
          position={[0.085, 0.016, 1.399]}
          rotation={[0, -0.021, 0]}
        >
          <mesh
            name="Circle009"
            castShadow
            receiveShadow
            geometry={nodes.Circle009.geometry}
            material={materials['Low machine buttons.002']}
          />
          <mesh
            name="Circle009_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle009_1.geometry}
            material={materials['low body body']}
          />
        </group>
        <mesh
          name="bottom_mesh_top_holes003"
          castShadow
          receiveShadow
          geometry={nodes.bottom_mesh_top_holes003.geometry}
          material={materials.Body}
          position={[0.085, 0.765, 1.399]}
          rotation={[0, -0.035, 0]}
          scale={0.947}
        />
        <group name="main_body004" position={[0.064, 2.73, 0.526]} rotation={[0, 1.567, 0]}>
          <mesh
            name="Cylinder003"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials['Body upper.001']}
          />
          <mesh
            name="Cylinder003_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_1.geometry}
            material={materials.plastic}
          />
          <mesh
            name="Cylinder003_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_2.geometry}
            material={materials['top body']}
          />
          <mesh
            name="Cylinder003_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_3.geometry}
            material={materials['low body body.001']}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/model/coffeemachine.glb');
