"use client";

import { Content } from "@prismicio/client";
import { useState } from "react";

import { MobileMenuToggle } from "./mobile-menu-toggle";
import { NavItems } from "./nav-items";
import { NavLogo } from "./nav-logo";

interface NavBarProps {
  settings: Content.SettingsDocument;
}

export const NavBar: React.FC<NavBarProps> = ({ settings }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav aria-label="Main Navigation">
      {/* Desktop Navigation */}
      <div className="hidden justify-between space-x-4 bg-slate-50 px-4 py-2 md:flex md:flex-row md:space-x-6 md:px-6 md:py-4">
        <div className="flex items-center">
          <NavLogo name={settings.data.name} />
        </div>
        <NavItems navItems={settings.data.nav_item} />
      </div>

      {/* Mobile Navigation */}
      <div className="flex items-center justify-between bg-slate-50 px-4 py-2 md:hidden">
        <NavLogo name={settings.data.name} />

        <MobileMenuToggle
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-slate-50 px-4 py-2 md:hidden">
          <NavItems navItems={settings.data.nav_item} isMobile />
        </div>
      )}
    </nav>
  );
};
