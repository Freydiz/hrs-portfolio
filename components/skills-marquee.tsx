'use client';

import clsx from 'clsx';
import { FaMobileAlt, FaSyncAlt, FaPaintBrush, FaSearch } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { FiCode } from 'react-icons/fi';
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiStyledcomponents,
  SiNodedotjs,
  SiStorybook,
  SiEslint,
  SiPrettier,
  SiGithub,
  SiDatadog,
  SiGoogleanalytics
} from 'react-icons/si';

const SkillsMarquee: React.FC = () => {
  const skillRows = [
    {
      direction: 'left',
      speed: 20,
      skills: [
        { name: 'React', icon: <SiReact className='h-6 w-6' /> },
        { name: 'Next.js', icon: <SiNextdotjs className='h-6 w-6' /> },
        { name: 'JavaScript', icon: <SiJavascript className='h-6 w-6' /> },
        { name: 'HTML5', icon: <SiHtml5 className='h-6 w-6' /> },
        { name: 'CSS3', icon: <SiCss3 className='h-6 w-6' /> },
        { name: 'Material-UI', icon: <FiCode className='h-6 w-6' /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className='h-6 w-6' /> },
        { name: 'shadcn/ui', icon: <FiCode className='h-6 w-6' /> }
      ]
    },
    {
      direction: 'right',
      speed: 40,
      skills: [
        { name: 'Styled-Components', icon: <SiStyledcomponents className='h-6 w-6' /> },
        { name: 'GSAP', icon: <FaPaintBrush className='h-6 w-6' /> },
        { name: 'Node.js', icon: <SiNodedotjs className='h-6 w-6' /> },
        { name: 'REST APIs', icon: <FaGear className='h-6 w-6' /> },
        { name: 'Storybook', icon: <SiStorybook className='h-6 w-6' /> },
        { name: 'ESLint', icon: <SiEslint className='h-6 w-6' /> },
        { name: 'Prettier', icon: <SiPrettier className='h-6 w-6' /> }
      ]
    },
    {
      direction: 'left',
      speed: 30,
      skills: [
        { name: 'GitHub', icon: <SiGithub className='h-6 w-6' /> },
        { name: 'Datadog', icon: <SiDatadog className='h-6 w-6' /> },
        { name: 'Google Analytics', icon: <SiGoogleanalytics className='h-6 w-6' /> },
        { name: 'Relewise', icon: <FaSearch className='h-6 w-6' /> },
        { name: 'Responsive', icon: <FaMobileAlt className='h-6 w-6' /> },
        { name: 'CI/CD', icon: <FaSyncAlt className='h-6 w-6' /> }
      ]
    }
  ];

  return (
    <>
      {skillRows.map((row, rowIndex) => (
        <div key={rowIndex} className='relative flex overflow-hidden'>
          <div
            className={clsx(
              `animate-marquee ${row.direction === 'right' ? 'animate-marquee-reverse' : ''} flex w-[200%] gap-8`
            )}
            style={{ animationDuration: `${row.speed}s` }}
          >
            {/* Double the skills to ensure continuous loop */}
            {[...row.skills, ...row.skills, ...row.skills, ...row.skills].map((skill, skillIndex) => (
              <div
                key={`${rowIndex}-${skillIndex}`}
                className='bg-primary/5 dark:bg-primary/10 flex flex-shrink-0 items-center justify-center rounded-full px-6 py-3 whitespace-nowrap'
              >
                <div className='text-primary mr-2'>{skill.icon}</div>
                <span className='font-medium whitespace-nowrap'>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SkillsMarquee;
