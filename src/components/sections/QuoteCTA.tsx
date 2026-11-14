import React from 'react';
import { Cinematic3DReviewsGallery } from './Cinematic3DReviewsGallery';

export interface QuoteCTAProps {
  title?: string;
  subtitle?: string;
  variant?: 'home' | 'about' | 'contact' | 'products';
  onOpenQuote?: () => void;
}

export const QuoteCTA: React.FC<QuoteCTAProps> = ({ onOpenQuote }) => {
  return <Cinematic3DReviewsGallery onOpenQuote={onOpenQuote} />;
};

export default QuoteCTA;
