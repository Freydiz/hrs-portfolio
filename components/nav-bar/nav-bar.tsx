'use client';

import { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import { useState } from 'react';

import { MobileMenuToggle } from './mobile-menu-toggle';

interface NavBarProps {
  settings: Content.SettingsDocument;
}

export const NavBar: React.FC<NavBarProps> = (props) => {
  const { settings } = props;

  const navItems = settings.data.nav_item;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className='container mx-auto flex h-16 items-center justify-between px-4'>
      <Link href='/' aria-label='Home page' className='hover:text-accent text-xl font-extrabold tracking-tighter'>
        {settings.data.name}
      </Link>

      {/* Desktop Navigation */}
      <nav aria-label='Desktop Navigation' className='hidden md:flex md:gap-6'>
        {navItems.map(({ link, label }, index) => (
          <PrismicNextLink key={index} field={link} className='hover:text-accent'>
            {label}
          </PrismicNextLink>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className='flex items-center justify-between md:hidden'>
        <MobileMenuToggle isMobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      </div>

      {mobileMenuOpen && (
        <div className='bg-primary/95 absolute inset-x-0 top-16 z-50 p-4 md:hidden'>
          <nav aria-label='Mobile Navigation' className='flex flex-col items-center space-y-4'>
            {navItems.map(({ link, label }, index) => (
              <PrismicNextLink key={index} field={link} className='hover:text-accent'>
                {label}
              </PrismicNextLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};
