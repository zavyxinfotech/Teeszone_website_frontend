import React from 'react';
import { CategoryPage } from './CategoryPage';

export const PromotionalEventsCategoryPage: React.FC<{ onOpenQuote?: () => void }> = ({ onOpenQuote }) => (
  <CategoryPage forcedSlug="promotional-events" onOpenQuote={onOpenQuote} />
);

export default PromotionalEventsCategoryPage;

