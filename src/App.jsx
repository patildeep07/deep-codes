import "./App.css";
import Header from "./components/header/header";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/about";
import Work from "./pages/work/work";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
