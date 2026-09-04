'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { TbArrowUpRight } from 'react-icons/tb';

import { portfolioContent } from '@/lib/portfolio-content';

import { MobileMenuToggle } from './mobile-menu-toggle';

interface NavBarProps {
  siteName?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ siteName = portfolioContent.name }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className='mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12'>
      <Link
        href='/'
        aria-label='Home page'
        className='hover:text-accent focus-visible:outline-accent rounded-sm text-base font-bold tracking-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-lg'
      >
        {siteName}
      </Link>

      <nav aria-label='Main navigation' className='hidden items-center gap-8 md:flex'>
        {portfolioContent.navigation.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className='text-foreground/75 hover:text-accent focus-visible:outline-accent rounded-sm text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4'
          >
            {label}
          </Link>
        ))}
      </nav>

      <Link
        href='#contact'
        className='border-accent/55 text-foreground hover:border-accent hover:bg-accent/10 focus-visible:outline-accent hidden items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 md:flex'
      >
        Let&apos;s talk
        <TbArrowUpRight aria-hidden='true' />
      </Link>

      <MobileMenuToggle isMobileMenuOpen={mobileMenuOpen} toggleMobileMenu={() => setMobileMenuOpen((open) => !open)} />

      {mobileMenuOpen && (
        <div
          id='mobile-navigation'
          className='bg-background/95 absolute inset-x-0 top-16 z-50 border-b border-white/10 p-5 shadow-2xl backdrop-blur-xl md:hidden'
        >
          <nav aria-label='Mobile navigation' className='mx-auto flex max-w-7xl flex-col'>
            {portfolioContent.navigation.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className='hover:text-accent focus-visible:outline-accent border-b border-white/8 px-2 py-4 text-lg transition-colors last:border-0 focus-visible:outline-2'
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};
