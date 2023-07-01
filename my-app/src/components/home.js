
    
    import React from 'react'
    import Navbar from './Navbar';
    import Sidebar from './Sidebar';
    
    import Bhaktapur from './Bhaktapur'
import Kathmandu from './Kathmandu'
import VacuumCleaner from './VacuumCleaner'
import TrendingAirPurifier from './TrendingAirPurifier'
import TrendingBoardGames from './TrendingBoardGames';

    import ContactPage from './ContactPage';
    import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
    import './component.css';

    function Home() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/ContactPage" element={<ContactPage />} />
              <Route path="/Bhaktapur" element={< Bhaktapur />} />
<Route path="/Kathmandu" element={< Kathmandu />} />
<Route path="/VacuumCleaner" element={< VacuumCleaner />} />
<Route path="/TrendingAirPurifier" element={< TrendingAirPurifier />} />
<Route path="/TrendingBoardGames" element={< TrendingBoardGames />} />
             
  
              <Route 
                path = "/"
                element = {
                <>
                  <div>
                    <Link to='Bhaktapur'>Bhaktapur</Link>
<Link to='Kathmandu'>Kathmandu</Link>
<Link to='VacuumCleaner'>VacuumCleaner</Link>
<Link to='TrendingAirPurifier'>TrendingAirPurifier</Link>
<Link to='TrendingBoardGames'>TrendingBoardGames</Link>
                  </div>
                </>
                }
                />
              </Routes>
              
        </BrowserRouter>
      )
    }
    export default Home;
    