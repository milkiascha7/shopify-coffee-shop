'use client';

import { Environment, Lightformer, useHelper } from '@react-three/drei';

const Lights = () => {
  return (
    <group name="lights">
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
