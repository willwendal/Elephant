import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import history from './History'
import App from '../App'
import Myevents from '../Pages/Myevents'
import Addevent from '../Pages/Addevent'
import Eventdetails from '../Pages/Eventdetails';

function Routes () {

  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/Myevents' exact component={Myevents} />
        <Route path='/Addevents' exact component={Addevent} />
        <Route path='/Eventdetails/:id' exact component={Eventdetails} />
      </Switch>
    </Router>
  )
}

export default Routes
