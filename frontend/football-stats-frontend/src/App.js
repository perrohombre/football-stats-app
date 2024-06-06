import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeagueTable from "./components/LeagueTable";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>PAINT Football Project</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table/:leagueId/season/:season" element={<LeagueTable />} />
          </Routes>
        </main>
        <footer>
          <p>© 2024 PAINT Football Project</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
