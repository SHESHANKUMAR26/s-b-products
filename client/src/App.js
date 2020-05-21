import React,{Component} from 'react';
import Login from './components/login';
import Register from './components/register';
import {Switch , Route} from 'react-router-dom';
import ProtectedRouter from './components/protected';
import AdPost from './components/AdPost';
import Home from './components/home';
import AboutUs from '../src/components/home/aboutUs'
import '../src/App.css';


const App = () => {
  
  return (
    <div> 
      <Switch>
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/login" component = {Login}/>
      <Route exact path = "/register" component = {Register}/>
      <Route exact path = "/aboutUs" component ={AboutUs}/>
      <ProtectedRouter exact path = "/home" component = {AdPost}/>
      </Switch>
    </div>
  )
}

export default App;
