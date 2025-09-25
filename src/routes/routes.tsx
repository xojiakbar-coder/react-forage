import type { RouteObject } from 'react-router-dom';

// layouts
import { HomeLayout } from '@/layouts/Home';
import { DashboardLayout } from '@/layouts/Dashboard';

// pages
import Home from '@/pages/Home/Home';
import Dashboard from '@/pages/Dashboard/Dashboard';

export const routes: RouteObject[] = [
  {
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />
      }
    ]
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  }
];
