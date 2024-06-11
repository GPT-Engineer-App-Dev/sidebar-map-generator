import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import MapWithSidebar from "./pages/MapWithSidebar.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/map" element={<MapWithSidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
