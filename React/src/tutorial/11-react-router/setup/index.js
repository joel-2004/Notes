import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          {/*using the exact makes sure home page is not displayed in /about or /people. It displays because 
       the react router disaplys the pages with / as well as /about i.e both has a "/" can be added to every routes*/}
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/people">
          <People></People>x
        </Route>
        <Route path="/person/:id" children={<Person></Person>}>
          {/* refer the people.js we usa placeholder so that the web url is based on the id,for
           now we display same content 
           example:
           http://localhost:3000/person/id:1
           http://localhost:3000/person/id:4
           note the change in id:
           */}


        </Route>
        <Route path="*">

          {/* * meand matching with every value but the problem is that /about or / will match with * and will
        display both, so we use the switch component 
        */}
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
