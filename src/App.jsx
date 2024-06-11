import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MapWithSidebar from "./pages/MapWithSidebar.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MapWithSidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
