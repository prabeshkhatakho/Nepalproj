import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import './component.css';

// Import your components here
import Bhaktapur from './Bhaktapur';
import Kathmandu from './Kathmandu';
import VacuumCleaner from './VacuumCleaner';
import TrendingAirPurifier from './TrendingAirPurifier';
import TrendingBoardGames from './TrendingBoardGames';
import ContactPage from './ContactPage';

function Home() {
  return (
    <BrowserRouter>
      <div>
        {/* Place the links inside a separate div */}
        <div>
          <Link to='/Bhaktapur'>Bhaktapur</Link>
          <Link to='/Kathmandu'>Kathmandu</Link>
          <Link to='/VacuumCleaner'>VacuumCleaner</Link>
          <Link to='/TrendingAirPurifier'>TrendingAirPurifier</Link>
          <Link to='/TrendingBoardGames'>TrendingBoardGames</Link>
        </div>

        <Routes>
          {/* Define your routes here */}
          <Route path="/Bhaktapur" element={<Bhaktapur />} />
          <Route path="/Kathmandu" element={<Kathmandu />} />
          <Route path="/VacuumCleaner" element={<VacuumCleaner />} />
          <Route path="/TrendingAirPurifier" element={<TrendingAirPurifier />} />
          <Route path="/TrendingBoardGames" element={<TrendingBoardGames />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Home;
