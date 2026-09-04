import { portfolioContent } from '@/lib/portfolio-content';

const Footer: React.FC = () => {
  return (
    <footer className='border-t border-white/8 py-7'>
      <div className='text-foreground/50 mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12'>
        <p>© {portfolioContent.name}</p>
        <p>Built with Next.js</p>
      </div>
    </footer>
  );
};

export default Footer;
