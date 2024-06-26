import { Carousel } from 'components/carousel';
import Features from 'components/feature/feature';
import { ThreeItemGrid } from 'components/grid/three-items';
// import Hero from 'components/hero/hero';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
// import Hero from '../components/hero/hero';
import Model from 'components/model/model';
import Hero from '../components/hero/hero';

const DynamicComponent = dynamic(() => import('../components/hero/hero'), { ssr: false });

// export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Suspense>
        <Hero />
        <ThreeItemGrid />
        <Model />
        <Features />
        <Carousel />
        <Footer />
      </Suspense>
    </>
  );
}
