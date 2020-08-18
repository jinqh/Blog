import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'
import Router from './router'

const App = () => (
  <BrowserRouter>
    <Switch>
      {
        Router.map((config, index) => (
          <Route path={config.path} key={index}>{config.component}</Route>
        ))
      }
    </Switch>
  </BrowserRouter>
)

export default App
