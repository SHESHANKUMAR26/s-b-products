import React,{Component} from 'react';
import Login from './auth/login';
import Register from './auth/register';
import {Switch , Route} from 'react-router-dom';
import ProtectedRouter from './auth/protected';
import Home from './auth/home';


const App = () => {
  
  return (
    <div> 
      <Switch>
      <Route exact path = "/" component = {Login}/>
      <Route exact path = "/login" component = {Login}/>
      <Route exact path = "/register" component = {Register}/>
      <ProtectedRouter exact path = "/home" component = {Home}/>
      </Switch>
    </div>
  )
}

export default App;
