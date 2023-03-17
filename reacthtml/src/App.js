import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
       
        <Header/>
       
         
          <Routes>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
          </Routes>

        <Footer/>
      </Router>

    </div>
  );
}

export default App;
