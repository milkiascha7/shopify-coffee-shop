'use client';

import { useEffect, useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import ModelView from 'components/model-section/model-section';
import gsap from 'gsap';
// import { yellowImg } from '../utils';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import { ModelsInfo, sizes } from '../../constants/constants';
import { animateWithGsapTimeline } from 'utils/animation';

// textures
import blackColor from '../../public/model/textures/New Black Texture.png';
import whiteColor from '../../public/model/textures/NEW White Texture.png';
import redColor from '../../public/model/textures/NEW RED TEXTURE.png';
import clsx from 'clsx';

const Model = () => {
  const [size, setSize] = useState('small');

  const [model, setModel] = useState({
    id: 1,
    title: 'Phillips Senseo Deep Black Mat',
    img: blackColor
  });

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
    if (size === 'large') {
      animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
        transform: 'translateX(-100%)',
        duration: 2
      });
    }

    if (size === 'small') {
      animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
        transform: 'translateX(0%)',
        duration: 2
      });
    }
  }, [size, model]);

  useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity: 1, ease: 'power2.inOut' });
  });

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>

        <div className="relative mt-5 flex flex-col items-center">
          <div className="relative h-[75vh] w-full cursor-grab overflow-hidden rounded-lg md:h-[90vh]">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />
            <Canvas
              shadows
              className="-z-20 h-full w-full cursor-grab"
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                right: 0,
                overflow: 'hidden'
              }}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className="mx-auto w-full">
            <p className="mb-5 text-center text-sm font-light">{model.title}</p>
            <div className="flex-center">
              <ul className="color-container">
                {ModelsInfo.map((item: any, i) => (
                  <li
                    key={i}
                    className={clsx('mx-2 h-7 w-7 cursor-pointer rounded-full')}
                    style={{
                      backgroundColor: item.color[0],
                      border: model.id === item.id ? 'solid 4px gray' : 'none'
                    }}
                    onClick={() => setModel(item)}
                  ></li>
                ))}
              </ul>
              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? 'white' : 'transparent',
                      color: size === value ? 'black' : 'white'
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
