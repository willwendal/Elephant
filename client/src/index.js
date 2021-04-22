import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './Routes/Routes';


ReactDOM.render(
  
  <Router>
    {/* <App /> */}
    <Routes />
  </Router>,
  
  document.getElementById('root')
);
