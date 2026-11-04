import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightedText?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlightedText,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={cn('flex flex-col max-w-3xl mb-8 md:mb-12', alignmentClasses[align], className)}>
      {eyebrow && (
        <span
          className={cn(
            'inline-block text-xs md:text-sm font-heading font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3',
            isDark
              ? 'bg-white/10 text-warm-200 border border-white/20'
              : 'bg-burgundy-50 text-burgundy-700 border border-burgundy-100'
          )}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight leading-tight',
          isDark ? 'text-white' : 'text-charcoal-900'
        )}
      >
        {title}{' '}
        {highlightedText && (
          <span className={isDark ? 'text-warm-300' : 'text-burgundy-700'}>
            {highlightedText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className={cn(
            'mt-3 md:mt-4 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed',
            isDark ? 'text-burgundy-100/90' : 'text-charcoal-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
