import { Suspense } from 'react';
import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import * as THREE from 'three';

import Lights from 'components/lights/lights';

import Model from '../../public/model/Scene';

const Loader = () => {
  return (
    <Html>
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <div className="h-[10vw] w-[10vw] rounded-full">Loading...</div>
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
      // className={`absolute h-full w-full ${index === 2 ? 'right-[-100%]' : ''} `}
    >
      {/** ambient light */}
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 1.3, 3.8]} />
      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={true}
        enableRotate
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0.9, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <gridHelper args={[10, 10, 0xff0000, 'white']} rotation-y={Math.PI / 2} />
      <axesHelper args={[10]} />

      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large'`}
        position={[0, 0, 0]}
      ></group>

      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
    </View>
  );
};

export default ModelView;
