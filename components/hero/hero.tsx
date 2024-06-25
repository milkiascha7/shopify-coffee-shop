'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';

export const videoSrc = '/images/coffee-dark video.mp4';

const Hero = () => {
  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, y: 60, delay: 1.8, duration: 1.2 });
    gsap.to('#hero2', { opacity: 1, y: 65, delay: 1.4, duration: 1 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 1.9, duration: 1.2 });
  }, []);

  return (
    <section className="nav-height relative w-full bg-black">
      <div className="flex-center mb-10 h-5/6 w-full flex-col">
        <p id="hero" className="hero-title relative">
          Senseo<span className="text-sm">&#xae;</span> Original
        </p>
        <p id="hero2" className="hero-subtitle mb-20 md:mb-10">
          Coffee Machine
        </p>
        <div className="h-[50vh] w-full md:h-auto md:w-10/12">
          <video
            className="pointer-events-none h-full w-full object-cover object-center"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} />
          </video>
        </div>
      </div>

      <div id="cta" className="flex translate-y-20 flex-col items-center opacity-0">
        <Link
          href="/product/philips-senseo-csa210-10-original-plus-coffee-pad-maker"
          className="btn text-lg font-bold md:text-xl"
        >
          Buy
        </Link>
        <p className="text-md text-center font-normal md:text-xl">
          From $299.99/small or $399.99/large
        </p>
      </div>
    </section>
  );
};

export default Hero;
