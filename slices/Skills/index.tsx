import { IconType } from 'react-icons';
import { TbBrush, TbCode, TbGauge, TbPlugConnected } from 'react-icons/tb';

import { SectionHeading } from '@/components/section-heading';
import { portfolioContent } from '@/lib/portfolio-content';

const skillIcons: IconType[] = [TbCode, TbBrush, TbGauge, TbPlugConnected];

const Skills: React.FC = () => {
  return (
    <section
      id='skills'
      aria-labelledby='skills-heading'
      className='scroll-mt-20 border-t border-white/8 py-20 sm:py-24'
    >
      <div className='mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12'>
        <SectionHeading>Skills &amp; technologies</SectionHeading>
        <h2 id='skills-heading' className='sr-only'>
          Skills and technologies
        </h2>

        <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
          {portfolioContent.skills.map((group, index) => {
            const Icon = skillIcons[index];

            return (
              <article
                key={group.title}
                className='hover:border-accent/25 rounded-xl border border-white/10 bg-white/[0.025] p-6 transition-colors hover:bg-white/[0.04]'
              >
                <div className='mb-5 flex items-center gap-4'>
                  <Icon aria-hidden='true' className='text-accent size-7' />
                  <h3 className='font-semibold'>{group.title}</h3>
                </div>
                <ul className='text-foreground/65 space-y-1.5 pl-11 leading-relaxed'>
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
