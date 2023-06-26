import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {
    Home,
    Products,
    SingleProduct,
    Cart,
    Checkout,
    Error,
    About,
    PrivateRoute,
    AuthWrapper
} from './pages'

import { Navbar, Sidebar } from './components'

function App() {
  return (
      <Router>
          <Navbar />
          <Sidebar />
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/about'>
                <About />
            </Route>
            <Route exact path='/cart'>
                <Cart />
            </Route>
            <Route exact path='/products'>
                <Products />
            </Route>
            <Route exact path='/products/:id' children={<SingleProduct />} />
            <Route exact path='/checkout'>
                <Checkout />
            </Route>
            <Route path='*'>
                <Error />
            </Route>
        </Switch>
      </Router>
  )
}

export default App
