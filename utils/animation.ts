import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target: any, animationProps: any, scrollProps: any) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      // the first one is on enter, on leave, enter back, leave back
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      // end: 'top 15%',
      // end: 'top top',
      ...scrollProps,
      markers: true
    }
  });
};

export const animateWithGsapTimeline = (
  timeline: any,
  rotationRef: any,
  rotationState: any,
  firstTarget: any,
  secondTarget: any,
  animationProps: any
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 0.5,
    ease: 'power2.inOut'
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  );
};
