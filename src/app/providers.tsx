/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';

interface QuoteModalContextType {
  isOpen: boolean;
  productPrefill: string;
  openQuote: (productName?: string) => void;
  closeQuote: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType>({
  isOpen: false,
  productPrefill: '',
  openQuote: () => {},
  closeQuote: () => {},
});

export const useQuoteModal = () => useContext(QuoteModalContext);

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productPrefill, setProductPrefill] = useState('');

  const openQuote = (productName?: string) => {
    setProductPrefill(productName || '');
    setIsOpen(true);
  };

  const closeQuote = () => {
    setIsOpen(false);
  };

  return (
    <QuoteModalContext.Provider value={{ isOpen, productPrefill, openQuote, closeQuote }}>
      {children}
    </QuoteModalContext.Provider>
  );
};
