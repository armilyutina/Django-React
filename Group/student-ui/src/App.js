import React, { useState, useEffect, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Components from './components/Group.js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import * as DetailView from './components/DetailView.js'


function App() {
  return(
    <div>
      <Router>
        <Components.Navbar />
        <Switch>
          <Route path = "/group/:id" exact component = {DetailView.GroupDetailView} />
          <Route path = "/student/:id" exact component = {DetailView.StudentDetailView} />
        </Switch>
      </Router>
    </div>  
  )
}

export default App;
