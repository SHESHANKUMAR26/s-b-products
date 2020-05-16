import React,{Component} from 'react';
import Login from './components/login';
import Register from './components/register';
import {Switch , Route} from 'react-router-dom';
import ProtectedRouter from './components/protected';
import Home from './components/home';


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
