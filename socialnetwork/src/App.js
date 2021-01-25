import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import AllPosts from './components/AllPosts'

import HomeContainer from './container/HomeContainer';


function App() {
  return (<Router>
   
          <Switch>
          <Route exact path='/' component={HomeContainer} />
            <Route exact path='/login' component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/posts" component={AllPosts} />

          </Switch>
       </Router>
  );
}

export default App;