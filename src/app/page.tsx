'use client';

import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import About from '@/components/landing/about';
import Services from '@/components/landing/services';
import HowWeWork from '@/components/landing/how-we-work';
import Partnership from '@/components/landing/partnership';
import Gallery from '@/components/landing/gallery';
import Testimonials from '@/components/landing/testimonials';
import Contact from '@/components/landing/contact';
import Footer from '@/components/landing/footer';
import SocialResponsibility from '@/components/landing/social-responsibility';
import Impact from '@/components/landing/impact';

// Even if params are not used, this can resolve some Next.js rendering issues.
export default function Home({ params }: { params: any }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Impact />
        <Services />
        <HowWeWork />
        <Partnership />
        <SocialResponsibility />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
