import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Home/Home.jsx'
import RoomDetails from './RoomDetails/RoomDetails.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/roomdetails',
    element:<RoomDetails />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
