import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Pizzas from "./pages/pizzas"; // Importa tus nuevas páginas
import Hamburguesas from "./pages/hamburguesas";
import Alitas from "./pages/alitas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/hamburguesas" element={<Hamburguesas />} />
        <Route path="/alitas" element={<Alitas />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
