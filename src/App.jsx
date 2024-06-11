import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import MapWithSidebar from "./pages/MapWithSidebar.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MapWithSidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
