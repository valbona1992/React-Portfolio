import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        <Route exact path={["/React-Portfolio/about", "/React-Portfolio/"]}>
          <About />
        </Route>
       <Route exact path="/React-Portfolio/portfolio">
          <Portfolio />
        </Route> 
        <Route exact path="/React-Portfolio/contact">
          <Contact />
        </Route>
         <Route exact path="/React-Portfolio/Resume">
          <Resume/>
        </Route> 
      </Switch>
    </Router>
    <Footer />
  </>
  );
}

export default App;

