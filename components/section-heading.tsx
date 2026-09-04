interface SectionHeadingProps {
  children: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <div className='mb-8 flex items-center gap-4'>
      <p className='text-foreground/75 text-xs font-bold tracking-[0.28em] uppercase'>{children}</p>
      <span aria-hidden='true' className='from-accent h-px w-8 bg-gradient-to-r to-transparent' />
    </div>
  );
};
