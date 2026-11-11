import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/layout/PageTransition';
import { useQuoteModal } from './providers';
import { companyContact } from '@/data/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/common/Button';

export const App: React.FC = () => {
  const { isOpen, productPrefill, openQuote, closeQuote } = useQuoteModal();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [modalData, setModalData] = useState({
    name: '',
    phone: '',
    email: '',
    quantity: '100 - 500 Pieces',
    notes: '',
  });

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalSubmitted(true);
    setTimeout(() => {
      setModalSubmitted(false);
      closeQuote();
    }, 2500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-warm-50 text-charcoal-900 selection:bg-burgundy-700 selection:text-white">
      {/* Main Navbar */}
      <Navbar onOpenQuote={() => openQuote()} />

      {/* Routed Page Content */}
      <main className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      {/* Main Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button - Icon Only */}
      <aside aria-label="WhatsApp quick chat" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        <a
          href={`https://wa.me/${companyContact.whatsapp}?text=Hi%20TeesZone,%20I%20would%20like%20to%20inquire%20about%20custom%20bulk%20t-shirts.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          {/* Official WhatsApp SVG Logo */}
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 fill-current shrink-0"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.11 19.1L7.83 18.93L4.71 19.75L5.54 16.71L5.35 16.41C4.58 15.19 4.17 13.57 4.17 11.92C4.17 7.38 7.87 3.67 12.04 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.06 8.02 12.22C8.14 12.38 9.74 14.86 12.21 15.93C14.26 16.81 14.68 16.64 15.12 16.59C15.57 16.55 16.57 16 16.77 15.42C16.98 14.85 16.98 14.36 16.92 14.26C16.86 14.15 16.7 14.09 16.45 13.97C16.21 13.84 15.01 13.25 14.79 13.17C14.56 13.09 14.4 13.05 14.24 13.29C14.07 13.54 13.6 14.09 13.46 14.26C13.32 14.42 13.17 14.44 12.93 14.32C12.69 14.2 11.91 13.94 10.98 13.11C10.26 12.46 9.77 11.66 9.63 11.42C9.49 11.18 9.61 11.04 9.74 10.92C9.85 10.81 9.98 10.63 10.11 10.49C10.23 10.35 10.27 10.24 10.35 10.08C10.43 9.92 10.39 9.78 10.33 9.66C10.27 9.54 9.77 8.32 9.57 7.83C9.37 7.36 9.17 7.42 9.02 7.42C8.88 7.41 8.71 7.33 8.53 7.33Z" />
          </svg>
        </a>
      </aside>

      {/* Global Quick Quote Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeQuote}
              className="absolute inset-0 bg-charcoal-950/70 backdrop-blur-sm"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-burgundy-100 z-10 max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="quote-modal-title"
            >
              <button
                onClick={closeQuote}
                className="absolute top-5 right-5 p-2 rounded-full text-charcoal-400 hover:text-burgundy-700 hover:bg-burgundy-50 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {modalSubmitted ? (
                <div className="py-8 text-center animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-black text-xl text-charcoal-900 mb-1">
                    Quote Request Received!
                  </h3>
                  <p className="text-xs text-charcoal-600">
                    Our estimating team in Tiruppur will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="mb-5">
                    <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 px-2.5 py-0.5 rounded-full">
                      Instant Factory Quote
                    </span>
                    <h3
                      id="quote-modal-title"
                      className="font-heading font-black text-xl sm:text-2xl text-charcoal-900 mt-2"
                    >
                      Request a Bulk Quotation
                    </h3>
                    <p className="text-xs text-charcoal-500 mt-0.5">
                      {productPrefill
                        ? `Custom manufacturing for: ${productPrefill}`
                        : 'Direct Tiruppur manufacturer pricing for orders 50+ pieces'}
                    </p>
                  </div>

                  <form onSubmit={handleModalSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-heading font-bold text-charcoal-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Sharma"
                        value={modalData.name}
                        onChange={(e) => setModalData({ ...modalData, name: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-burgundy-100 bg-warm-50/50 focus:bg-white focus:outline-none focus:border-burgundy-700"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-heading font-bold text-charcoal-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={modalData.phone}
                          onChange={(e) => setModalData({ ...modalData, phone: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-burgundy-100 bg-warm-50/50 focus:bg-white focus:outline-none focus:border-burgundy-700"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-heading font-bold text-charcoal-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="anand@brand.com"
                          value={modalData.email}
                          onChange={(e) => setModalData({ ...modalData, email: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-burgundy-100 bg-warm-50/50 focus:bg-white focus:outline-none focus:border-burgundy-700"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold text-charcoal-700 mb-1">
                        Estimated Order Quantity
                      </label>
                      <select
                        value={modalData.quantity}
                        onChange={(e) => setModalData({ ...modalData, quantity: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-burgundy-100 bg-warm-50/50 focus:bg-white focus:outline-none focus:border-burgundy-700"
                      >
                        <option value="50 - 100 Pieces">50 - 100 Pieces</option>
                        <option value="100 - 500 Pieces">100 - 500 Pieces</option>
                        <option value="500 - 2,000 Pieces">500 - 2,000 Pieces</option>
                        <option value="2,000+ Pieces">2,000+ Pieces (Enterprise)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold text-charcoal-700 mb-1">
                        Requirements / Notes
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Fabric choice, colorways, printing or embroidery placements, expected delivery target..."
                        value={modalData.notes}
                        onChange={(e) => setModalData({ ...modalData, notes: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-burgundy-100 bg-warm-50/50 focus:bg-white focus:outline-none focus:border-burgundy-700"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        className="w-full justify-center shadow-soft"
                        withArrow
                      >
                        Submit for 24h Free Quote
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
