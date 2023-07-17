import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from '../components/ErrorPage'
import { MainLayout } from '../layouts/MainLayout'
import { welcomeRoutes } from './welcomeRouter'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      welcomeRoutes,
    ],
  },

])
