import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header'
import About from './pages/about'
import Portfolio from './pages/portfolio'
import Resume from './pages/resume'
import Contact from './pages/contact'
import Footer from './components/footer'




function App() {
  return (
    <>
    <Header/>
    <Router>
      <Switch>
        <Route exact path={["/React-Portfolio", "/React-Portfolio/about"]}>
          <About/>
        </Route>
       <Route path="/React-Portfolio/#/portfolio">
          <Portfolio />
        </Route> 
        <Route path="/React-Portfolio/#/contact">
          <Contact />
        </Route>
         <Route path="/React-Portfolio/resume">
          <Resume/>
        </Route> 
      </Switch>
    </Router>
    <Footer />
  </>
  );
}

export default App;

