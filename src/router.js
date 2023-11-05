import { createBrowserRouter } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import DashBoardPage from 'pages/DashBoardPage';
import C404 from 'pages/404Page';

export default createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/dashboard',
    element: <DashBoardPage />
  },
  {
    path: '*',
    element: <C404 />
  }
]);
