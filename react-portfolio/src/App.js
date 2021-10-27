import React from "react";
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
        <Header />
        <Navbar />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;

