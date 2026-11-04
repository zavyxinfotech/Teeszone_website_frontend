import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { pageTransition } from '@/lib/animations';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const { pathname } = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (shouldReduceMotion) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <motion.main
      key={pathname}
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen"
    >
      {children}
    </motion.main>
  );
};
