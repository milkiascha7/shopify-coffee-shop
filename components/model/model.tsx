'use client';

import { useEffect, useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import ModelSection from 'components/model-section/model-section';
import gsap from 'gsap';
// import { yellowImg } from '../utils';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import { Models } from 'constants/constants';
// import { animateWithGsapTimeline } from '../utils/animations';

const Model = () => {
  // const [size, setSize] = useState('small');

  const [modelTag, setModelTag] = useState({
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#FFE7B9', '#6F6C64']
    // img: yellowImg
  });

  //   camera control for the model view

  const cameraControlSmall = useRef();
  // const cameraControlLarge = useRef();

  // const small = useRef(new THREE.Group());
  // const large = useRef(new THREE.Group());

  // rotation
  // const [smallRotation, setSmallRotation] = useState(0);
  // const [largeRotation, setLargeRotation] = useState(0);

  // const tl = gsap.timeline();

  //   useEffect(() => {
  //     if (size === 'large') {
  //       animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
  //         transform: 'translateX(-100%)',
  //         duration: 2
  //       });
  //     }

  //     if (size === 'small') {
  //       animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
  //         transform: 'translateX(0%)',
  //         duration: 2
  //       });
  //     }
  //   }, [size]);

  // useGSAP(() => {
  //   gsap.to('#heading', { y: 0, opacity: 1 });
  // });

  return (
    <section className="border-2 px-5 py-20 sm:px-10 sm:py-32">
      <div className="screen-max-width">
        {/* <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1> */}

        <div className="mt-5 flex flex-col items-center">
          <div className="relative h-[75vh] w-full overflow-hidden md:h-[90vh]">
            <ModelSection
              index={1}
              // groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              // setRotationState={setSmallRotation}
              item={modelTag}
              // size={size}
            />

            <Canvas
              className="h-full w-full"
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                right: 0,
                overflow: 'hidden'
              }}
              //   eventSource={document.getElementById('root')}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className="mx-auto w-full">
            <p className="mb-5 text-center text-sm font-light">{modelTag.title}</p>
            <div className="flex-center">
              <ul className="color-container">
                {Models.map((item: any, i: number) => (
                  <li
                    key={i}
                    className="mx-2 h-6 w-6 rounded-full"
                    style={
                      {
                        // backgroundColor: item.color[0]
                      }
                    }
                    onClick={() => setModelTag(item)}
                  ></li>
                ))}
              </ul>
              {/* <button className="size-btn-container">
                {sizes.map(({ label, value }: any) => (
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
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
