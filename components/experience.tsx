import { portfolioContent } from '@/lib/portfolio-content';

import { SectionHeading } from './section-heading';

const Experience: React.FC = () => {
  return (
    <section
      id='experience'
      aria-labelledby='experience-heading'
      className='scroll-mt-20 border-t border-white/8 py-20 sm:py-24'
    >
      <div className='mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12'>
        <SectionHeading>Experience</SectionHeading>

        <h2 id='experience-heading' className='sr-only'>
          Professional experience
        </h2>

        <div className='before:from-accent/70 before:via-accent/35 relative space-y-4 pl-5 before:absolute before:inset-y-0 before:left-1 before:w-px before:bg-gradient-to-b before:to-transparent sm:pl-8'>
          {portfolioContent.experience.map((experience) => (
            <article
              key={experience.company}
              className='group hover:border-accent/30 relative grid gap-5 rounded-xl border border-white/10 bg-white/[0.025] p-5 transition-colors hover:bg-white/[0.04] md:grid-cols-[14rem_1fr] md:gap-8 md:p-7'
            >
              <span
                aria-hidden='true'
                className='bg-accent ring-background absolute top-7 -left-[1.38rem] size-2.5 rounded-full shadow-[0_0_18px_hsl(var(--accent))] ring-4 sm:-left-[2.13rem]'
              />

              <div className='md:border-accent/35 md:border-r md:pr-8'>
                <p className='text-foreground/55 mb-1 text-sm'>{experience.dates}</p>
                <h3 className='text-lg font-semibold'>{experience.role}</h3>
                <p className='text-accent mt-1 font-medium'>{experience.company}</p>
              </div>

              <div>
                <p className='text-foreground/75 max-w-3xl leading-relaxed'>{experience.description}</p>
                <ul aria-label={`${experience.company} technologies`} className='mt-4 flex flex-wrap gap-2'>
                  {experience.technologies.map((technology) => (
                    <li
                      key={technology}
                      className='border-accent/15 bg-accent/10 text-foreground/75 rounded-full border px-3 py-1 text-xs'
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
