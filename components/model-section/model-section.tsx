import { Suspense } from 'react';
import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import * as THREE from 'three';

import Lights from 'components/lights/lights';

import Model from 'components/scene/scene';

const Loader = () => {
  return (
    <Html>
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <div className=" rounded-full text-xl font-bold md:text-3xl">Loading</div>
      </div>
    </Html>
  );
};

const ModelView = ({
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
      <ambientLight intensity={0.3} color="#f8f9fa" />
      <PerspectiveCamera makeDefault position={[0, 1.5, 4.4]} />
      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0.9, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large'`}
        position={[0, 0, 0]}
      ></group>

      <Suspense fallback={<Loader />}>
        <Model scale={index === 1 ? [15, 15, 15] : [20, 20, 20]} item={item} size={size} />
      </Suspense>
    </View>
  );
};

export default ModelView;
