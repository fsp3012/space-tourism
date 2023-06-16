import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";
import Crew from "./pages/Crew";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="technology" element={<Technology />} />
          <Route path="crew" element={<Crew />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
