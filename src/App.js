import React ,{Component} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import { Switch, Route} from "react-router-dom";
import Home from './Components/Home';
import Resume from './Components/Resume';
import About from './Components/About';
import Contact from './Components/Contact';
import PhotoProfile from './Components/PhotoProfile';
import {Spring} from 'react-spring/renderprops';


export default class App extends React.PureComponent {
 
  render() {
    return (
      <>
      <Header />
   
   <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/resume" component={Resume} />
     <Route exact path="/about" component={About} />
     <Route exact path="/contact" component={Contact} />



   </Switch>
  
   
      </>
    )
  }
}