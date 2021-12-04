import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StadiumList from "./components/StadiumList";
import StadiumDetail from "./components/StadiumDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StadiumList />} />
        <Route path="/stadiums/:stadiumName" element={<StadiumDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
