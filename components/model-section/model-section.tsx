'use client';
import { Suspense } from 'react';
import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import * as THREE from 'three';

import Model from 'public/model/Scene';
import Lights from 'components/lights/lights';

const ModelSection = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item
}: any) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`absolute h-full w-full ${index === 2 ? 'right-[-100%]' : ''} `}
    >
      {/** ambient light */}
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large'`}
        position={[0, 0, 0]}
      ></group>

      {/* <Suspense fallback={<Loader />}> */}
      <Suspense>
        <Model scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} item={item} />
        {/* <Model scale={[17, 17, 17]} /> */}
      </Suspense>
    </View>
  );
};
export default ModelSection;
