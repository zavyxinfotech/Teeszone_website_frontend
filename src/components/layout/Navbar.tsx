import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { navigationLinks } from '@/data/navigation';
import { Button } from '@/components/common/Button';
import { MobileMenu } from './MobileMenu';
import { Menu } from 'lucide-react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

interface NavbarProps {
  onOpenQuote?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollProgress();
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      navigate('/contact');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 border-none shadow-none ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-2.5 sm:py-3'
            : 'bg-transparent py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo - Exact proportions from reference design */}
            <Link to="/" className="flex items-center group" aria-label="TeesZone Home">
              <img
                src="/assets/logo/teeszone-logo.png"
                alt="TeesZone - elevate your style with custom tees"
                className="h-10 sm:h-11 md:h-12 lg:h-[48px] xl:h-[50px] w-auto object-contain transition-transform duration-300 group-hover:scale-102"
              />
            </Link>

            {/* Desktop Navigation Links - Exact spacing and styling */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 xl:gap-3">
              {navigationLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3.5 lg:px-4 py-1.5 lg:py-2 rounded-full font-heading text-sm lg:text-[15px] font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-burgundy-700 bg-burgundy-50 font-semibold'
                        : 'text-charcoal-800 hover:text-burgundy-700 hover:bg-burgundy-50/50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Right Action: Get a Quote */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={handleQuoteClick}
                withArrow
                className="rounded-full px-6 py-2.5 text-sm font-heading font-medium bg-burgundy-700 hover:bg-burgundy-800 text-white shadow-soft hover:shadow-soft-lg transition-all"
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-charcoal-900 hover:text-burgundy-700 hover:bg-burgundy-50 rounded-lg transition-colors cursor-pointer"
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6 stroke-[2.2]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenQuote={handleQuoteClick}
      />
    </>
  );
};
