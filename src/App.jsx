import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MapWithSidebar from "./pages/MapWithSidebar.jsx";
import Navbar from "./components/Navbar.jsx"; // Import the Navbar component

function App() {
  return (
    <Router>
      <Navbar /> {/* Add the Navbar component here */}
      <Routes>
        <Route exact path="/" element={<MapWithSidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
