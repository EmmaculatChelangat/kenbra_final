import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Pages/Home'
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";




function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" exact element= {< Home />} />
      <Route path="/about" element= {< About />} />
      <Route path="/services" element={< Services/>} />
    </Routes>
  </Router>
  )
}

export default App;
