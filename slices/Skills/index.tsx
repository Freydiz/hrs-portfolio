import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import SkillsMarquee from '@/components/skills-marquee';

/**
 * Props for `Skills`.
 */
export type SkillsProps = SliceComponentProps<Content.SkillsSlice>;

/**
 * Component for "Skills" Slices.
 */
const Skills: React.FC<SkillsProps> = ({ slice }) => {
  if (!slice.primary.skills) return null;

  return (
    <section
      id='skills'
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='overflow-hidden py-20'
    >
      <div className='container mx-auto max-w-3xl px-4'>
        <div className='flex flex-col gap-4'>
          <h2 className='border-accent mb-6 max-w-fit border-b-2 pb-2 text-3xl font-bold'>{slice.primary.heading}</h2>

          <p>{slice.primary.text}</p>

          <div className='container mx-auto max-w-3xl space-y-8 px-4'>
            <SkillsMarquee />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
