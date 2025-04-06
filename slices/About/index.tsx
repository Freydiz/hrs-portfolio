import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { Download } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About: React.FC<AboutProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id='about'
      className='bg-background/50 py-20'
    >
      <div className='container mx-auto max-w-3xl px-4'>
        <div className='flex flex-col gap-4'>
          <h2 className='border-accent mb-6 max-w-fit border-b-2 pb-2 text-3xl font-bold'>{slice.primary.heading}</h2>

          {slice.primary.paragraph.map((item, index) => (
            <p key={index}>{item.text}</p>
          ))}

          <Button asChild className='mt-4 w-fit'>
            <Link href='/resume.pdf' download>
              <Download className='mr-2 h-4 w-4' />
              Download CV
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
