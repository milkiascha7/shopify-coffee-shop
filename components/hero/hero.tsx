'use client';

import { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';

export const smallHeroVideo = '/images/coffee-dark video.mp4';
export const heroVideo = '/images/coffee-dark video.mp4';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState<string | null>(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, y: 60, delay: 1.8, duration: 1.2 });
    gsap.to('#hero2', { opacity: 1, y: 65, delay: 1.4, duration: 1 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 1.9, duration: 1.2 });
  }, []);

  if (!videoSrc) return null;

  return (
    <section className="nav-height relative w-full bg-black">
      <div className="flex-center h-5/6 w-full flex-col">
        <p id="hero" className="hero-title">
          Senseo&#xae; Original
        </p>
        <p id="hero2" className="hero-subtitle">
          Coffee Machine
        </p>
        <div className="w-9/12 md:w-10/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} />
          </video>
        </div>
      </div>

      <div id="cta" className="flex translate-y-20 flex-col items-center opacity-0">
        <Link href="#highlights" className="btn">
          Buy
        </Link>
        <p className="text-xl font-normal">From $76.99/small or $189/large</p>
      </div>
    </section>
  );
};

export default Hero;

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

// 'use client';

// import { useState, useEffect } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

// const Hero = () => {
//   const smallHeroVideo = '/images/coffee-video.mp4';
//   const heroVideo = '/images/coffee-video.mp4';

//   const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

//   const handleVideoSrcSet = () => {
//     if (window.innerWidth < 760) {
//       setVideoSrc(smallHeroVideo);
//     } else {
//       setVideoSrc(heroVideo);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleVideoSrcSet);

//     return () => {
//       window.removeEventListener('resize', handleVideoSrcSet);
//     };
//   }, []);

//   useGSAP(() => {
//     gsap.to('#hero', { opacity: 1, delay: 1.5 });
//     gsap.to('#cta', { opacity: 1, y: -50, delay: 1.5 });
//   }, []);

//   return (
//     <section className="relative h-full w-full bg-black">
//       <div className="flex-center h-5/6 w-full flex-col">
//         <p id="hero" className="hero-title">
//           iPhone 15 Pro
//         </p>
//         <div className="md:10/12 mt-10 w-9/12">
//           <div className="absolute h-full w-full bg-black opacity-55" />
//           {videoSrc && (
//             <video
//               className="pointer-events-none w-full"
//               autoPlay
//               muted
//               playsInline={true}
//               key={videoSrc}
//             >
//               <source src={videoSrc} />
//             </video>
//           )}
//         </div>
//       </div>

//       <div id="cta" className="z-50 flex translate-y-20 flex-col items-center opacity-0">
//         <a href="#highlights" className="btn">
//           Buy
//         </a>
//         <p className="text-xl font-normal">From $199/month or $999</p>
//       </div>
//     </section>
//   );
// };

// export default Hero;
