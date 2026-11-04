/* eslint-disable react-refresh/only-export-components */
import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';

const Home = lazy(() => import('@/pages/Home/Home'));
const About = lazy(() => import('@/pages/About/About'));
const Products = lazy(() => import('@/pages/Products/Products'));
const Gallery = lazy(() => import('@/pages/Gallery/Gallery'));
const Contact = lazy(() => import('@/pages/Contact/Contact'));
const CategoryPage = lazy(() => import('@/pages/Categories/CategoryPage'));
const CorporateCategoryPage = lazy(() => import('@/pages/Categories/CorporateCategoryPage'));
const BlankCategoryPage = lazy(() => import('@/pages/Categories/BlankCategoryPage'));
const SchoolCategoryPage = lazy(() => import('@/pages/Categories/SchoolCategoryPage'));
const PromotionalEventsCategoryPage = lazy(() => import('@/pages/Categories/PromotionalEventsCategoryPage'));
const SportsAcademicsCategoryPage = lazy(() => import('@/pages/Categories/SportsAcademicsCategoryPage'));

const LoadingFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-burgundy-200 border-t-burgundy-700 rounded-full animate-spin" />
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: 'products',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: 'gallery',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Gallery />
          </Suspense>
        ),
      },
      {
        path: 'category/:slug',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <CategoryPage />
          </Suspense>
        ),
      },
      {
        path: 'categories/:slug',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <CategoryPage />
          </Suspense>
        ),
      },
      {
        path: 'category/corporate',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <CorporateCategoryPage />
          </Suspense>
        ),
      },
      {
        path: 'category/blank',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <BlankCategoryPage />
          </Suspense>
        ),
      },
      {
        path: 'category/school',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <SchoolCategoryPage />
          </Suspense>
        ),
      },
      {
        path: 'category/promotional-events',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <PromotionalEventsCategoryPage />
          </Suspense>
        ),
      },
      {
        path: 'category/sports-academics',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <SportsAcademicsCategoryPage />
          </Suspense>
        ),
      },
      {
        path: 'products/:category',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <CategoryPage />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);
