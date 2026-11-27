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
            ? 'bg-white/95 backdrop-blur-md py-2.5 sm:py-3 md:py-4'
            : 'bg-transparent py-3.5 sm:py-4 md:py-5 lg:py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo - Larger on Desktop only */}
            <Link to="/" className="flex items-center group" aria-label="TeesZone Home">
              <img loading="eager" decoding="async" src="/assets/logo/teeszone-logo.webp"
                alt="TeesZone - elevate your style with custom tees"
                className="h-10 xs:h-11 sm:h-12 md:h-14 lg:h-[58px] xl:h-[62px] w-auto object-contain transition-transform duration-300 group-hover:scale-102"
              />
            </Link>

            {/* Desktop Navigation Links - Larger spacing & font on Desktop only */}
            <nav className="hidden md:flex items-center gap-1.5 lg:gap-3 xl:gap-4">
              {navigationLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 lg:px-5 py-2 lg:py-2.5 rounded-full font-heading text-[15px] lg:text-base xl:text-[17px] font-medium transition-all duration-200 ${
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
                className="rounded-full px-7 py-3 text-[15px] lg:text-base font-heading font-medium bg-burgundy-700 hover:bg-burgundy-800 text-white shadow-soft hover:shadow-soft-lg transition-all"
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-1.5">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-1.5 xs:p-2 text-charcoal-900 hover:text-burgundy-700 hover:bg-burgundy-50 rounded-lg transition-colors cursor-pointer"
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
