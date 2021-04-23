import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import history from './History'
import App from '../App'
import Myevents from '../Pages/Myevents'
import Addevent from '../Pages/Addevent'

function Routes () {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/Myevents' exact component={Myevents} />
        <Route path='/Addevents' exact component={Addevent} />
      </Switch>
    </Router>
  )
}

export default Routes
