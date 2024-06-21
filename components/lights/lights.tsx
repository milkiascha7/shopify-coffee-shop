'use client';

import { Environment, Lightformer, useHelper } from '@react-three/drei';
import { useRef } from 'react';
import { SpotLightHelper } from 'three';

const Lights = () => {
  const lightHelper = useRef();
  // useHelper(lightHelper, SpotLightHelper, 'cyan');
  return (
    // group different lights and lightformers. We can use group to organize lights, cameras, meshes, and other objects in the scene.
    <group name="lights">
      {/**
       * @description Environment is used to create a background environment for the scene
       * https://github.com/pmndrs/drei?tab=readme-ov-file#environment
       */}
      {/**
       * @description Lightformer used to create custom lights with various shapes and properties in a 3D scene.
       * https://github.com/pmndrs/drei?tab=readme-ov-file#lightformer
       */}

      <Environment resolution={512}>
        <group>
          <Lightformer form="rect" intensity={1} position={[-1, 0, -10]} scale={2} color={'#fff'} />
          <Lightformer
            form="rect"
            intensity={3}
            position={[-10, 2, 1]}
            scale={2}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={1}
            position={[10, 0, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>
      {/* <Environment
        files="/model/brown-photostudio-04_2K.exr"
        background
        near={1}
        far={1000}
        // environmentIntensity={0.21}
        backgroundIntensity={0.21}
        // preset="city"
      /> */}

      {/**
       * @description spotLight is used to create a light source positioned at a specific point
       * in the scene that emits light in a specific direction.
       * https://threejs.org/docs/#api/en/lights/SpotLight
       */}
      <spotLight
        position={[-2, 10, 5]}
        angle={0.15}
        penumbra={1} // the penumbra is the soft edge of a shadow cast by a point light
        decay={0} // the amount the light dims as it moves away from the source
        intensity={Math.PI * 0.24} // the light intensity
        color={'#f8f9fa'}
      />
      <spotLight
        position={[0, -25, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI * 4.9}
        color={'#f8f9fa'}
      />
      <spotLight
        // ref={lightHelper}
        position={[-10, 15, -5]}
        angle={0.15}
        penumbra={1}
        decay={0.1}
        intensity={Math.PI * 1.5}
      />
    </group>
  );
};

export default Lights;
