import React,{Component} from 'react';
import Login from './components/login';
import Register from './components/register';
import {Switch , Route} from 'react-router-dom';
import ProtectedRouter from './components/protected';
import AdPost from './components/AdPost';


const App = () => {
  
  return (
    <div> 
      <Switch>
      <Route exact path = "/" component = {Login}/>
      <Route exact path = "/login" component = {Login}/>
      <Route exact path = "/register" component = {Register}/>
      <ProtectedRouter exact path = "/home" component = {AdPost}/>
      </Switch>
    </div>
  )
}

export default App;
