import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
