import { isFilled, asImageSrc } from '@prismicio/client';
import { Metadata } from 'next';

import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import { createClient } from '@/prismicio';
import About from '@/slices/About';
import Hero from '@/slices/Hero';
import Skills from '@/slices/Skills';

export default async function Page() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('homepage');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      title: isFilled.keyText(page.data.meta_title) ? page.data.meta_title : undefined,
      description: isFilled.keyText(page.data.meta_description) ? page.data.meta_description : undefined,
      images: isFilled.image(page.data.meta_image) ? [asImageSrc(page.data.meta_image)] : undefined
    }
  };
}
