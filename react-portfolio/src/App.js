import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header'
import About from './components/about'
// import Portfolio from './components/portfolio'
// import Resume from './components/resume'
import Contact from './components/contact'
import Footer from './components/footer'




function App() {
  return (
    <>
    <Header/>
    <Router>
      <Switch>
        <Route exact path={"/about"}>
          <About />
        </Route>
        {/* <Route exact path="/Portfolio">
          <Portfolio />
        </Route> */}
        <Route exact path="/contact">
          <Contact />
        </Route>
        {/* <Route exact path="/Resume">
          <Resume />
        </Route> */}
      </Switch>
    </Router>
    <Footer />
  </>
  );
}

export default App;

