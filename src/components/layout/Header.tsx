'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';

/**
 * Header component with navigation and Primr branding
 * Features responsive design with mobile hamburger menu
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Toggles the mobile menu visibility
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Scrolls to a specific section on the page
   * @param sectionId - ID of the section to scroll to
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F1EFEE]/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/images/logo-horizontal.png"
                alt="Primr Events - AI-Powered Event Management"
                width={140}
                height={42}
                priority
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-[#1a1a1a] hover:text-[#ce1620] transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('solution')}
              className="text-[#1a1a1a] hover:text-[#ce1620] transition-colors font-medium"
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection('waitlist')}
              className="text-[#1a1a1a] hover:text-[#ce1620] transition-colors font-medium"
            >
              Join Waitlist
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              onClick={() => scrollToSection('waitlist')}
              size="sm"
            >
              Get Early Access
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#1a1a1a] hover:text-[#ce1620] focus:outline-none focus:ring-2 focus:ring-[#ce1620] rounded-md p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-[#1a1a1a] hover:text-[#ce1620] transition-colors font-medium text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('solution')}
                className="text-[#1a1a1a] hover:text-[#ce1620] transition-colors font-medium text-left"
              >
                Solution
              </button>
              <button
                onClick={() => scrollToSection('waitlist')}
                className="text-[#1a1a1a] hover:text-[#ce1620] transition-colors font-medium text-left"
              >
                Join Waitlist
              </button>
              <div className="pt-2">
                <Button
                  onClick={() => scrollToSection('waitlist')}
                  size="sm"
                  className="w-full"
                >
                  Get Early Access
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
