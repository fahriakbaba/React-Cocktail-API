import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="about" element={ <About />} />
        <Route path="cocktail/:id" element={ <SingleCocktail />} />
      </Routes>
    </div>
  );
}

export default App;
