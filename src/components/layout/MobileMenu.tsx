import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationLinks } from '@/data/navigation';
import { X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/common/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenQuote }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-sm z-50 md:hidden"
            aria-hidden="true"
          />

          {/* Drawer: Exactly half mobile view width (w-1/2) */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 w-1/2 min-w-[200px] max-w-[280px] bg-[#FFFDF9] z-50 p-4 sm:p-5 flex flex-col justify-between shadow-2xl md:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            <div>
              {/* Header: Logo removed, only Close button on the right */}
              <div className="flex items-center justify-end pb-3 border-b border-burgundy-100/60">
                <button
                  onClick={onClose}
                  className="p-1.5 text-charcoal-700 hover:text-[#80011F] hover:bg-burgundy-50 rounded-full transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-4 space-y-1.5">
                {navigationLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3 py-2.5 rounded-xl font-heading font-semibold text-sm transition-colors ${
                        isActive
                          ? 'bg-[#80011F] text-white shadow-soft'
                          : 'text-charcoal-800 hover:bg-burgundy-50 hover:text-[#80011F]'
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                  </NavLink>
                ))}
              </nav>

              {/* Quote CTA */}
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full justify-center text-xs py-2.5 px-3 bg-[#80011F] hover:bg-[#5B0116]"
                  withArrow
                  onClick={() => {
                    onClose();
                    onOpenQuote();
                  }}
                >
                  Get a Free Quote
                </Button>
              </div>
            </div>

            {/* Quick Contact (phone, mail, address) completely removed as requested */}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
