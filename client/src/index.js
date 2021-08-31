import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes/Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todos from './reducers';
// import reduxStore from './redux/store';

const reduxStore = createStore(todos);

// const store = createStore(todos, window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={reduxStore}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);
