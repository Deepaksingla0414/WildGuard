import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Blog from "./Components/BlogPage";
import Contact from "./Components/ContactUsPage";
import SpeciesCard from "./Components/SpeciesCard";
import Join from "./Components/JoinTeamPage";
import Program from "./Components/ProgramsPage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/join" element={<Join />} />
        <Route path="/program" element={<Program />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wildLife" element={<SpeciesCard />} />
      </Routes>
    </Router>
  );
}
