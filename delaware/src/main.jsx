import { StrictMode, createContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router';
import SitesList from './pages/sites/SitesList.jsx';
import SiteDetail from './pages/sites/SiteDetail.jsx';
import UsersList from './pages/users/UsersList.jsx';
import UserDetail from './pages/users/UserDetail.jsx';
import NotFound from './pages/NotFound.jsx';
import Layout from './pages/Layout.jsx';
import ThemeProvider from './contexts/Theme.context';
import { AuthProvider } from './contexts/Auth.context';
import Login from './pages/Login.jsx';
import Logout from './pages/Logout.jsx';
import PrivateRoute from './components/PrivateRoute';

export const ThemeContext = createContext();

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: '/',
        element: <Navigate replace to='/sites' />,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/logout',
        Component: Logout,
      },
      {
        path: 'gebruikers',
        Component: PrivateRoute,
        children: [
          {
            index: true,
            Component: UsersList,
          },
          {
            path: ':id',
            Component: UserDetail,
          },
        ],
      },
      {
        path: 'sites',
        Component: PrivateRoute,
        children: [
          {
            index: true,
            Component: SitesList,
          },
          {
            path: ':id',
            Component: SiteDetail,
          },
        ],
      },
      { path: '*', element: <NotFound /> },
    ],
  }]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
);