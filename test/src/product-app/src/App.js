import React from 'react';
import './App.css';

//Import everything needed to create special url, and pages
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//import navigate tool bar
import {Navigation} from "./components/Navigation"

//import the class home that we created in the components folder
import {Home} from './components/Home'
import {Product} from './components/Product'
import {Command} from './components/Command'

//primary gives a blue color to the button
function App() {
  return (
    <BrowserRouter>
    <div className="container">

        <h3 className="m-3 d-flex justify-content-center">React-js with web api demo</h3>
        <h5 className="m-3 d-flex justify-content-center">Product management portal</h5>

        <Navigation/>

        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/product' component={Product} />
          <Route path='/command' component={Command} />
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
