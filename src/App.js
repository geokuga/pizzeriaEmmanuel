import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
