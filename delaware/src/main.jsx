import { StrictMode, createContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router';
import TransactionList from './pages/transactions/TransactionsList.jsx';
import AddOrEditTransaction from './pages/transactions/AddOrEditTransaction.jsx'
import PlacesList from './pages/places/PlacesList.jsx';
import PlaceDetail from './pages/places/PlaceDetail.jsx';
import NotFound from './pages/NotFound.jsx';
import About, { Services, History, Location } from './pages/about/About.jsx';
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
        element: <Navigate replace to='/transactions' />,
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
        path: '/transactions',
        Component: PrivateRoute,
        children: [
          {
            index: true,
            Component: TransactionList,
          },
          {
            path: 'add',
            Component: AddOrEditTransaction,
          },
          {
            path: 'edit/:id',
            Component: AddOrEditTransaction,
          },
        ],
      },
      {
        path: 'places',
        Component: PrivateRoute,
        children: [
          {
            index: true,
            Component: PlacesList,
          },
          {
            path: ':id',
            Component: PlaceDetail,
          },
        ],
      },
      {
        path: 'about',
        Component: About,
        children: [
          {
            path: 'services',
            Component: Services,
          },
          {
            path: 'history',
            Component: History,
          },
          {
            path: 'location',
            Component: Location,
          },
        ],
      },
      {
        path: 'services',
        element: <Navigate to='/about/services' replace />,
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