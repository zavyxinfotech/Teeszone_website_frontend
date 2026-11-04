import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight, Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  withArrow?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  withArrow = false,
  isLoading = false,
  className,
  children,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-heading font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-burgundy-700/40 active:scale-[0.98] select-none';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-burgundy-700 text-white shadow-soft hover:bg-burgundy-800 hover:shadow-soft-lg hover:-translate-y-0.5',
    secondary: 'bg-warm-100 text-burgundy-700 border border-burgundy-200 hover:bg-burgundy-50 hover:border-burgundy-400',
    outline: 'bg-transparent text-burgundy-700 border-2 border-burgundy-700 hover:bg-burgundy-700 hover:text-white',
    ghost: 'bg-transparent text-charcoal-700 hover:text-burgundy-700 hover:bg-burgundy-50/60',
    white: 'bg-white text-burgundy-700 shadow-soft hover:bg-warm-50 hover:shadow-soft-lg hover:-translate-y-0.5',
    dark: 'bg-charcoal-900 text-white hover:bg-charcoal-800 hover:shadow-soft',
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    (disabled || isLoading) && 'opacity-60 cursor-not-allowed pointer-events-none',
    className
  );

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : null}
      <span>{children}</span>
      {withArrow && !isLoading && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cn(combinedClasses, 'group')}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cn(combinedClasses, 'group')} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {content}
      </a>
    );
  }

  return (
    <button className={cn(combinedClasses, 'group')} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
};
