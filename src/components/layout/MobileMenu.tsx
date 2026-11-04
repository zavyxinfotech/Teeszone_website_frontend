import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationLinks, companyContact } from '@/data/navigation';
import { X, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
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

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-warm-50 z-50 p-6 flex flex-col justify-between shadow-2xl md:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-burgundy-100">
                <img
                  src="/assets/logo/teeszone-logo.png"
                  alt="TeesZone Logo"
                  className="h-9 w-auto object-contain"
                />
                <button
                  onClick={onClose}
                  className="p-2 text-charcoal-700 hover:text-burgundy-700 hover:bg-burgundy-50 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-6 space-y-2">
                {navigationLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl font-heading font-semibold text-base transition-colors ${
                        isActive
                          ? 'bg-burgundy-700 text-white shadow-soft'
                          : 'text-charcoal-800 hover:bg-burgundy-50 hover:text-burgundy-700'
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-60" />
                  </NavLink>
                ))}
              </nav>

              {/* Quote CTA */}
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
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

            {/* Quick Contact Footer in Menu */}
            <div className="pt-6 border-t border-burgundy-100 mt-6 space-y-3 text-xs text-charcoal-600">
              <a
                href={`tel:${companyContact.phone}`}
                className="flex items-center gap-2 hover:text-burgundy-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-burgundy-700 shrink-0" />
                <span>{companyContact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${companyContact.email}`}
                className="flex items-center gap-2 hover:text-burgundy-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-burgundy-700 shrink-0" />
                <span>{companyContact.email}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-burgundy-700 shrink-0 mt-0.5" />
                <span>{companyContact.address}</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
