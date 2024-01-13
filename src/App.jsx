import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'

import AuthProvider from './providers/AuthProvider'
import Routes from './routes'

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

// export default App

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import PrivateRoute from './routes/privateRoutes'
// import PublicRoute from './routes/publicRoutes'
// import checkAuth from './services/checkAuth'

// import './index.css'
// // import ErrorPage from './error-page'

// export default function App() {
//   // Conditionally include routes based on auth status
//   console.log('checkAuth()', checkAuth()) // TODO: remove this

//   const router = createBrowserRouter([
//     checkAuth() ? PrivateRoute() : [...PublicRoute()]
//   ])
//   console.log('router', router) // TODO: remove this

//   return <RouterProvider router={router} />
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
