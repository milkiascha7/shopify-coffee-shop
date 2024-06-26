'use client';

import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { animateWithGsap } from 'utils/animation';
import explore1Img from 'public/images/render 2.png';
import explore2Img from 'public/images/button image.png';
// import exploreVideo from 'public/images/explore.mp4';
import gsap from 'gsap';
import Image from 'next/image';

const Features = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom'
      },
      onComplete: () => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }
    });

    animateWithGsap('#features_title', { y: 0, opacity: 1, ease: 'power1' }, null);
    animateWithGsap('#features_title2', { y: 0, opacity: 1, ease: 'power1' }, null);

    animateWithGsap('.g_grow', { scale: 1, opacity: 1, ease: 'power1' }, { scrub: 5.5 });
    animateWithGsap(
      '.g_text',
      {
        y: 0,
        opacity: 1,
        ease: 'power2.inOut',
        duration: 1
      },
      null
    );
  }, [containerRef.current]);

  return (
    <section
      className="common-padding relative mb-10 h-full overflow-hidden rounded-xl bg-zinc md:mx-6"
      ref={containerRef}
    >
      <div className="screen-max-width">
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="mb-24 gap-y-10 md:gap-y-0">
            <h2
              className="text-center text-3xl font-semibold opacity-0 transition-all ease-in-out md:text-5xl lg:text-7xl"
              id="features_title"
            >
              Senseo<span className="text-sm">&#xae;</span> Original
            </h2>
            <h2
              className="text-center text-4xl font-semibold opacity-0 transition-all ease-in-out md:text-5xl lg:text-7xl"
              id="features_title2"
            >
              Forged in titanium.
            </h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative flex h-[50vh] w-full items-center">
              <video
                playsInline
                id="exploreVideo"
                className="h-full w-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src="/images/coffee-video.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="relative flex w-full flex-col">
              <div className="feature-video-container">
                <div className="h-[50vh] flex-1 overflow-hidden">
                  <Image
                    src={explore1Img}
                    alt="titanium"
                    className="feature-video g_grow"
                    priority
                  />
                </div>
                <div className="g_grow h-[50vh] flex-1 overflow-hidden">
                  <Image src={explore2Img} alt="titanium 2" className="feature-video g_grow" />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-center flex-1">
                  <p className="feature-text g_text">
                    Blends timeless elegance with modern sophistication. .{' '}
                    <span className="text-gray">
                      Its sleek, minimalist design not only enhances your kitchen aesthetic but also
                      reflects the quality and precision engineering behind every cup.{' '}
                    </span>
                    The compact form factor is perfect for any countertop, ensuring that style and
                    functionality go hand-in-hand.
                  </p>
                </div>

                <div className="flex-center flex-1">
                  <p className="feature-text g_text">
                    This innovative coffee maker features a unique button that allows you to easily
                    switch between half cup and full cup options,
                    <span className="text-gray">
                      {' '}
                      catering to your perfect coffee moment. Whether you need a quick caffeine fix
                      or a leisurely full cup,{' '}
                    </span>
                    the intuitive button design ensures a seamless brewing experience with just a
                    touch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
