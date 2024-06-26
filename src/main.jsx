import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import About from './About'
import App from './App'
import ErrorPage from './ErrorPage'
import Contacts from './Contacts'

const site = import.meta.env.BASE_URL

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contacts',
    element: <Contacts />
  },
], {
  basename: site
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

function app() {
  const title = 'huehuehue'
  return (
    <div>
      <h1>{title}</h1>
      <button type = 'button'></button>
    </div>
  )
}
