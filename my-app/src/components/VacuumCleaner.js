
  import './component.css';
  import React from 'react'
  import Navbar from './Navbar'
  import Sidebar from './Sidebar'

  function VacuumCleaner() {
    return (
      <div className="locations">
        <Navbar />
        <Sidebar />
        <div className="location">
        
<h1>Tell me about vacuum cleaner</h1>
<p>A vacuum cleaner is a device that uses an air pump to create a vacuum, which in turn cleans dust and dirt from surfaces and upholstery.</p>
<img src="https://m.media-amazon.com/images/I/61Gd8fvPqqL._AC_SL1500_.jpg" alt="Image"/>
<h1>what are the 5 top trending vacuum cleaners</h1>
<p>1. Dyson Ball Multi Floor 2 Upright Vacuum Cleaner
2. Shark Navigator Lift-Away Professional Upright Vacuum
3. Hoover WindTunnel T-Series Rewind Plus Bagless Upright Vacuum
4. Bissell CleanView Deluxe Corded Handheld Vacuum
5. Eureka NEU182A PowerSpeed Lightweight Bagless Upright Vacuum</p>
        </div>
      </div>
    )
  }

  export default VacuumCleaner;

  