import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealAnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  immediate?: boolean;
  className?: string;
}

export const RevealAnimation: React.FC<RevealAnimationProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  immediate = false,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 24, x: 0 };
      case 'down':
        return { y: -24, x: 0 };
      case 'left':
        return { x: 24, y: 0 };
      case 'right':
        return { x: -24, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  if (immediate) {
    return (
      <motion.div
        initial={{ opacity: 0, ...offset }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
