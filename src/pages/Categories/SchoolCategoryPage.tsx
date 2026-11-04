import React from 'react';
import { CategoryPage } from './CategoryPage';

export const SchoolCategoryPage: React.FC<{ onOpenQuote?: () => void }> = ({ onOpenQuote }) => (
  <CategoryPage forcedSlug="school" onOpenQuote={onOpenQuote} />
);

export default SchoolCategoryPage;

