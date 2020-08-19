
import React from 'react'
import About from '../pages/About'
import Home from '../pages/Home'

const Router = [
  {
    path: '/about',
    component: <About />,
  },
  {
    path: '/',
    component: <Home />,
  }
]

export default Router
