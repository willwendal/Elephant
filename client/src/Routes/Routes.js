import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from './History';
import App from '../App';
import MyEvents from '../Pages/MyEvents/MyEvents.js';
import AddEvent from '../Pages/AddEvent/AddEvent.js';
import EventDetails from '../Pages/EventDetails/EventDetails';

function Routes () {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/Myevents' exact component={MyEvents} />
        <Route path='/Addevents' exact component={AddEvent} />
        <Route path='/Eventdetails/:id' exact component={EventDetails} />
      </Switch>
    </Router>
  );
}

export default Routes;
