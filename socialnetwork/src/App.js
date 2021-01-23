import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Login from './components/Login'
import Register from './components/Register'


function App() {
  return (<Router>
   
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
       </Router>
  );
}

export default App;