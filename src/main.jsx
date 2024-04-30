import React from 'react'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// condigurando o router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoute from './routes.jsx';

import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Hosts_Virtuais from './pages/Hosts_Virtuais.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/home",
    element: <PrivateRoute>
      <Home />
    </PrivateRoute>
  },
  {
    path: "/hosts-virtuais",
    element: <PrivateRoute>
      <Hosts_Virtuais />
    </PrivateRoute>
  },
  {
    path: "*",
    element: <Login /> 
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
