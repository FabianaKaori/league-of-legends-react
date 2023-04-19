import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Home from './pages/Home'
import Champion from './pages/Champion/Champion'
import ErrorPage from './pages/ErrorPage/ErrorPage'

import { createBrowserRouter, RouterProvider} from 'react-router-dom' 


const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/champions",
        element: <Champion />,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
