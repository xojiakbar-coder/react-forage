import type { RouteObject } from 'react-router-dom';

// pages
import Home from '@/pages/Home/Home';
import Main from '@/layouts/Main/Main';
import Dashboard from '@/pages/Dashboard/Dashboard';

export const routes: RouteObject[] = [
  {
    element: <Main />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        index: true,
        path: '/',
        element: <Dashboard />
      }
    ]
  }
];
