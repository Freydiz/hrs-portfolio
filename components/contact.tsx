import Link from 'next/link';
import { TbArrowUpRight, TbBrandGithub, TbBrandLinkedin, TbMail } from 'react-icons/tb';

import { portfolioContent } from '@/lib/portfolio-content';

import { SectionHeading } from './section-heading';
import { Button } from './ui/button';

const Contact: React.FC = () => {
  return (
    <section
      id='contact'
      aria-labelledby='contact-heading'
      className='scroll-mt-20 border-t border-white/8 py-20 sm:py-24'
    >
      <div className='mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12'>
        <SectionHeading>Let&apos;s connect</SectionHeading>

        <div className='grid items-end gap-8 lg:grid-cols-[1fr_auto]'>
          <div>
            <h2 id='contact-heading' className='text-3xl font-bold tracking-tight sm:text-4xl'>
              Let&apos;s build something great.
            </h2>
            <p className='text-foreground/65 mt-4 max-w-2xl text-lg leading-relaxed'>
              I&apos;m always open to interesting opportunities, projects and conversations about frontend, UX and
              technology.
            </p>
          </div>

          <div className='flex flex-wrap items-center gap-3 sm:gap-4'>
            <Button
              asChild
              size='lg'
              className='bg-accent text-background shadow-accent/25 hover:bg-accent/90 shadow-lg'
            >
              <Link href={`mailto:${portfolioContent.email}`}>
                <TbMail />
                Send me an email
                <TbArrowUpRight />
              </Link>
            </Button>

            <Button variant='ghost' size='icon' asChild>
              <Link href={portfolioContent.links.linkedin} target='_blank' rel='noopener noreferrer'>
                <TbBrandLinkedin />
                <span className='sr-only'>LinkedIn</span>
              </Link>
            </Button>

            <Button variant='ghost' size='icon' asChild>
              <Link href={portfolioContent.links.github} target='_blank' rel='noopener noreferrer'>
                <TbBrandGithub />
                <span className='sr-only'>GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
