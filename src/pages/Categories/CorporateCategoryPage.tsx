import React from 'react';
import { CategoryPage } from './CategoryPage';

export const CorporateCategoryPage: React.FC<{ onOpenQuote?: () => void }> = ({ onOpenQuote }) => (
  <CategoryPage forcedSlug="corporate" onOpenQuote={onOpenQuote} />
);

export default CorporateCategoryPage;

