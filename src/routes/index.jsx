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
      element: <div>Service Page</div>
    },
    {
      path: '/about-us',
      element: <div>About Us</div>
    }
  ]

  const routesForAuthenticatedOnly = [
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/profile',
          element: <div>User Profile</div>
        },
        {
          path: '/logout',
          element: <Login />
        }
      ]
    }
  ]

  const routesForNotAuthenticatedOnly = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    }
  ]

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly
  ])

  return <RouterProvider router={router} />
}

export default Routes
