import React from 'react'
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import NavBar from './Components/NavBar'
import Education from './Components/Education'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <NavBar />
        <Home />
      </>
    )
  },
  {
    path: '/education',
    element: (
      <>
        <NavBar />
        <Education/>
      </>
    )
  },
  {
    path:'/skills',
    element:(
      <>
        <NavBar />
        <Skills/>
      </>
    )
  },
  {
    path: '/project',
    element:(
      <>
        <NavBar />
        <Projects/>
      </>
    )
  },
  {
    path: '/contact',
    element: (
      <>
        <NavBar />
        <Contact/>
      </>
    )
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App