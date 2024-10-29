import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Hero from "./Components/Hero.tsx"
import Disclaimer from "./Components/Disclaimer.tsx"
import Policy from "./Components/Policy.tsx"
import About from "./Components/About.tsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='' element={<Hero/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/disclaimer' element={<Disclaimer/>} />
      <Route path='/policy' element={<Policy/>} />
      
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
