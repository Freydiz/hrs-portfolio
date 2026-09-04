'use client';

import { gsap } from 'gsap';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { TbArrowDown, TbBrandGithub, TbBrandLinkedin, TbDownload, TbMail } from 'react-icons/tb';

import { Button } from '@/components/ui/button';
import { portfolioContent } from '@/lib/portfolio-content';

const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add('(prefers-reduced-motion: no-preference)', () => {
        const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

        timeline
          .from('.hero-eyebrow', { opacity: 0, y: 12, duration: 0.45 })
          .from('.hero-title-line', { opacity: 0, y: 42, rotateX: -18, duration: 0.75, stagger: 0.08 }, '-=0.18')
          .from('.hero-copy', { opacity: 0, y: 18, duration: 0.55, stagger: 0.07 }, '-=0.42')
          .from('.hero-aside', { opacity: 0, x: 20, duration: 0.6 }, '-=0.5')
          .from('.hero-orbit', { opacity: 0, scale: 0.88, duration: 1.1, ease: 'expo.out' }, '-=0.85');
      });

      return () => media.revert();
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id='hero'
      ref={ref}
      aria-labelledby='hero-heading'
      className='relative flex min-h-[min(48rem,calc(100svh-4rem))] items-center overflow-hidden border-b border-white/8 py-20 sm:py-24'
    >
      <div
        aria-hidden='true'
        className='hero-orbit border-accent/10 absolute top-1/2 -right-36 size-[32rem] -translate-y-1/2 rounded-full border bg-[radial-gradient(circle_at_35%_35%,hsl(var(--accent)/0.18),hsl(var(--primary)/0.04)_42%,transparent_70%)] shadow-[inset_45px_0_90px_hsl(var(--accent)/0.08)] sm:-right-24 lg:size-[42rem]'
      />

      <div className='relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:px-12'>
        <div className='max-w-4xl'>
          <p className='hero-eyebrow text-accent mb-5 text-xs font-bold tracking-[0.34em] uppercase'>
            Frontend Developer
          </p>

          <h1
            id='hero-heading'
            className='text-[clamp(3.75rem,9vw,7.5rem)] leading-[0.82] font-extrabold tracking-[-0.065em]'
          >
            <span className='hero-title-line block [transform-origin:left_center]'>Henriette Riis</span>
            <span className='hero-title-line from-foreground to-accent block [transform-origin:left_center] bg-gradient-to-r via-[#dec7ff] bg-clip-text pb-3 text-transparent'>
              Steinbach
            </span>
          </h1>

          <p className='hero-copy text-foreground/85 mt-5 text-xl sm:text-2xl'>
            Building performant, intuitive web experiences.
          </p>
          <p className='hero-copy text-foreground/65 mt-3 text-sm tracking-wide sm:text-base'>
            React{' '}
            <span aria-hidden='true' className='text-accent px-2'>
              ·
            </span>{' '}
            Next.js
            <span aria-hidden='true' className='text-accent px-2'>
              ·
            </span>{' '}
            TypeScript
            <span aria-hidden='true' className='text-accent px-2'>
              ·
            </span>{' '}
            UI &amp; Performance
          </p>

          <div className='hero-copy mt-8 flex flex-wrap gap-3'>
            <Button
              asChild
              size='lg'
              className='bg-accent text-background shadow-accent/25 hover:bg-accent/90 shadow-lg'
            >
              <Link href='#experience'>
                View experience
                <TbArrowDown />
              </Link>
            </Button>

            <Button
              variant='outline'
              size='lg'
              asChild
              className='border-accent/50 bg-background/20 hover:border-accent hover:bg-accent/10'
            >
              <Link href={portfolioContent.links.cv} download>
                <TbDownload />
                Download CV
              </Link>
            </Button>
          </div>

          <div className='hero-copy mt-6 flex items-center gap-2'>
            <Button variant='ghost' size='icon' asChild>
              <Link href={portfolioContent.links.github} target='_blank' rel='noopener noreferrer'>
                <TbBrandGithub />
                <span className='sr-only'>GitHub</span>
              </Link>
            </Button>

            <Button variant='ghost' size='icon' asChild>
              <Link href={portfolioContent.links.linkedin} target='_blank' rel='noopener noreferrer'>
                <TbBrandLinkedin />
                <span className='sr-only'>LinkedIn</span>
              </Link>
            </Button>

            <Button variant='ghost' size='icon' asChild>
              <Link href={`mailto:${portfolioContent.email}`}>
                <TbMail />
                <span className='sr-only'>Email</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className='hero-aside border-accent/45 text-foreground/70 relative hidden border-l pl-6 text-lg leading-relaxed lg:block'>
          <p>Turning complex requirements into simple, meaningful experiences.</p>
          <p className='text-accent/70 mt-28 text-[0.65rem] font-semibold tracking-[0.28em] uppercase'>
            Code · Design · People · Impact
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
