import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavLink, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet></Outlet>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <div>空</div>,
      },
      {
        path: 'welcome',
        element: <Outlet></Outlet>,
        children: [
          {
            path: '1',
            element: <div>1<NavLink to="/welcome/2">下一页</NavLink></div>,
          },
          {
            path: '2',
            element: <div>2<NavLink to="/welcome/3">下一页</NavLink></div>,
          },
          {
            path: '3',
            element: <div>4<NavLink to="/welcome/xxxx">下一页</NavLink></div>,
          },
        ],
      },

    ],
  },

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
