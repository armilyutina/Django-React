import React from 'react';
import ReactDOM from 'react-dom';

import {Provider } from 'react-redux'
import store from './store/store.js'
import { BrowserRouter as Router, Route} from 'react-router-dom'


import Students from './Students'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store} >
      <Router>
          <Route path= '/' exact component = {App} />
          <Route path= '/group/:id' exact component = {Students} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
