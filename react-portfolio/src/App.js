import { useState } from "react";
import Header from './components/header'
import About from './pages/about'
import Portfolio from './pages/portfolio'
import Resume from './pages/resume'
import Contact from './pages/contact'
import Footer from './components/footer'




function App() {
  const [currentPage, handlePageChange] = useState("About me");

  const renderPage = () => {
    switch(currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default: 
        return <About />;
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
    
  );
}

export default App;