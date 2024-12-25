import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import AuthCard from '../components/Auth/Auth';
import Repositories from '../components/Repositories/Repositories';
import ComingSoon from '../components/ComingSoon/ComingSoon';
import MainPage from '../components/MainPage/MainPage';
import CoverPage from '../components/CoverPage/CoverPage';
const router = createBrowserRouter([
    {
        path: "/", // Separate path for AuthCard
        element: <CoverPage/>,
      },
  {
    path: "/assignment", // Root path
    element: <MainPage />, // Use MainPage as the layout for dashboard-related routes
    children: [
      {
        path: "repositories", // Nested route for repositories
        element: <Repositories />,
      },
      {
        path: "coming-soon", // Nested route for "coming soon" page
        element: <ComingSoon />,
      },
    ],
  },
  {
    path: "/auth", // Separate path for AuthCard
    element: <AuthCard />,
  },
]);

export default router;
