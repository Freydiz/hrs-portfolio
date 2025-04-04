'use client';

import { Content, KeyTextField } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { gsap } from 'gsap';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import { Button } from '@/components/ui/button';

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: React.FC<HeroProps> = ({ slice }) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        '.text-animation',
        {
          x: -100,
          opacity: 0,
          rotate: -10
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: 'elastic.out(1, 0.3)',
          duration: 1,
          transformOrigin: 'left top',
          delay: 0.5,
          stagger: { each: 0.1, from: 'random' }
        }
      );

      tl.fromTo(
        '.tag-line',
        {
          y: 20,
          opacity: 0,
          scale: 1.2
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: 'elastic.out(1, 0.3)',
          duration: 1
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  const renderLetters = (text: KeyTextField, key: string) => {
    if (!text) return;

    return text.split('').map((letter, index) => (
      <span key={index} className={`text-animation text-animation-${key} inline-block opacity-0`}>
        {letter}
      </span>
    ));
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id='projects'
      ref={ref}
      className='flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 text-center'
    >
      <div className='flex max-w-3xl flex-col gap-12'>
        <div>
          <h1
            className='mb-8 text-[clamp(3rem,12vmin,20rem)] leading-none font-extrabold tracking-tighter'
            aria-label={`${slice.primary.firstname} ${slice.primary.middelname} ${slice.primary.lastname}`}
          >
            <span className='inline-flex gap-2 whitespace-nowrap'>
              <span>{renderLetters(slice.primary.firstname, 'first')}</span>
              <span>{renderLetters(slice.primary.middelname, 'middle')}</span>
            </span>
            <span className='text-primary -mt-[.2em] block whitespace-nowrap'>
              {renderLetters(slice.primary.lastname, 'last')}
            </span>
          </h1>

          <span className='tag-line from-secondary via-accent to-secondary block bg-gradient-to-tr bg-clip-text text-2xl font-bold tracking-[.2em] text-transparent uppercase md:text-4xl'>
            {slice.primary.tag_line}
          </span>
        </div>

        <div className='flex flex-col items-center justify-center gap-6'>
          {/* <div className='animate-fade-in-up flex translate-y-5 flex-col items-center justify-center gap-4 opacity-0 sm:flex-row'>
            <Button asChild>
              <Link href='#projects'>
                View My Work <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>

            <Button variant='outline' asChild>
              <Link href='#contact'>Contact Me</Link>
            </Button>
          </div> */}

          <div className='animate-fade-in-up flex translate-y-5 items-center justify-center gap-4 opacity-0'>
            <Button variant='ghost' size='icon' asChild>
              <Link href='https://github.com/Freydiz' target='_blank' rel='noopener noreferrer'>
                <Github className='h-5 w-5' />

                <span className='sr-only'>GitHub</span>
              </Link>
            </Button>

            <Button variant='ghost' size='icon' asChild>
              <Link
                href='https://www.linkedin.com/in/henriette-riis-steinbach/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin className='h-5 w-5' />

                <span className='sr-only'>LinkedIn</span>
              </Link>
            </Button>

            <Button variant='ghost' size='icon' asChild>
              <Link href='mailto:mail@henrietteriis.dk'>
                <Mail className='h-5 w-5' />

                <span className='sr-only'>Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
