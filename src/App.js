import React from "react";
import Header from './components/Header'; 
import About from "./components/About";
import Programs from "./components/Programs";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <About /> 
      <Services />
      <Programs />
      <Footer />
      <main>
        
      </main>
    </div>
  );
}

export default App;
