import React from 'react';
import { CategoryPage } from './CategoryPage';

export const SportsAcademicsCategoryPage: React.FC<{ onOpenQuote?: () => void }> = ({ onOpenQuote }) => (
  <CategoryPage forcedSlug="sports-academics" onOpenQuote={onOpenQuote} />
);

export default SportsAcademicsCategoryPage;

