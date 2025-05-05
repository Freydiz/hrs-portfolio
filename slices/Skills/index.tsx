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
  return (
    <section
      id='skills'
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='overflow-hidden py-20'
    >
      <SkillsMarquee />
    </section>
  );
};

export default Skills;
