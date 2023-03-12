import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { AuthPage, AdminPage, VentasPage } from './Pages';
import './index.css'



const modernRouter = createBrowserRouter([
  {
    path: '/',
    // element: <RootPage />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '/venta',
    element: <VentasPage />
  },
  {
    path: '/admin',
    element: <AdminPage />
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={modernRouter} />
  </React.StrictMode>
)
