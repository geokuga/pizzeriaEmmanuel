import React from "react";
// Cambiamos BrowserRouter por HashRouter
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";

function App() {
  return (
    /* HashRouter no requiere 'basename' para funcionar en subcarpetas de GitHub */
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        {/* Opcional: Ruta de captura por si el usuario escribe algo mal */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
