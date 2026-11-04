import React from 'react';
import { CategoryPage } from './CategoryPage';

export const BlankCategoryPage: React.FC<{ onOpenQuote?: () => void }> = ({ onOpenQuote }) => (
  <CategoryPage forcedSlug="blank" onOpenQuote={onOpenQuote} />
);

export default BlankCategoryPage;

