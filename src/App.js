import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Produtos from "./Components/Produtos";
import Contato from "./Components/Contato";
import Produto from "./Components/Produto";
const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
