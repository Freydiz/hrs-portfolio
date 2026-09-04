import { TbBulb, TbDeviceLaptop, TbUsers } from 'react-icons/tb';

import { SectionHeading } from '@/components/section-heading';
import { portfolioContent } from '@/lib/portfolio-content';

const highlightIcons = [TbDeviceLaptop, TbUsers, TbBulb];

const About: React.FC = () => {
  return (
    <section id='about' aria-labelledby='about-heading' className='scroll-mt-20 py-20 sm:py-24'>
      <div className='mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12'>
        <SectionHeading>About me</SectionHeading>

        <div className='grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.8fr)] lg:items-center lg:gap-20'>
          <div>
            <h2 id='about-heading' className='max-w-3xl text-3xl leading-tight font-bold tracking-tight sm:text-4xl'>
              {portfolioContent.about.heading}
            </h2>

            <div className='text-foreground/70 mt-6 max-w-3xl space-y-4 text-base leading-relaxed sm:text-lg'>
              {portfolioContent.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside
            aria-label='Professional profile highlights'
            className='rounded-xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/10 sm:p-7'
          >
            {portfolioContent.about.highlights.map((highlight, index) => {
              const Icon = highlightIcons[index];

              return (
                <div
                  key={highlight.title}
                  className='flex gap-5 border-b border-white/8 py-5 first:pt-0 last:border-0 last:pb-0'
                >
                  <Icon aria-hidden='true' className='text-accent mt-1 size-7 shrink-0' />
                  <div>
                    <p className='font-semibold'>{highlight.title}</p>
                    <p className='text-foreground/60 mt-1 leading-snug'>{highlight.description}</p>
                  </div>
                </div>
              );
            })}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
