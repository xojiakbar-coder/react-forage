import type { RouteObject } from 'react-router-dom';

// pages
import Home from '@/pages/Home/Home';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/documentation',
    element: <h1>Documentation</h1>
  }
];
