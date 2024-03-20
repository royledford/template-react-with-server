import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import { ProtectedRoute } from './protectedRoute'
import Login from '../pages/login/Login'
import Home from '../pages/Home/Home'

const Routes = () => {
  const { token } = useAuth()

  // routes go here
  const routesForPublic = [
    {
      path: '/service',
      element: <div>Service Page</div>,
    },
    {
      path: '/about-us',
      element: <div>About Us</div>,
    },
  ]

  // const routesForAuthenticatedOnly = [
  //   {
  //     path: '/',
  //     element: <ProtectedRoute />,
  //     children: [
  //       {
  //         path: '/',
  //         element: <Home />,
  //       },
  //       {
  //         path: '/profile',
  //         element: <div>User Profile</div>,
  //       },
  //       {
  //         path: '/logout',
  //         element: <Login />,
  //       },
  //     ],
  //   },
  // ]

  const publicRoutes = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]

  const authenticated = [
    {
      path: '/app',
      element: <Home />,
      children: [
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'profile',
          element: <Login />,
        },
      ],
    },
    {
      path: '/profile',
      element: <Login />,
    },
  ]

  const routes = [...publicRoutes, ...authenticated]

  const router = createBrowserRouter(routes)

  return <RouterProvider router={router} />
}

export default Routes
