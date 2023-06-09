
  import './component.css';
  import React from 'react'
  import Navbar from './Navbar'
  import Sidebar from './Sidebar'

  function VacuumCleaner() {
    return (
      <div className="location">
        <Navbar />
        <Sidebar />
        
<h1>Tell me about vacuum cleaner</h1>
<p>A vacuum cleaner is a device that uses an air pump to create a partial vacuum to suck up dust and dirt from floors and other surfaces.</p>
<img src="https://m.media-amazon.com/images/I/61Gd8fvPqqL._AC_SL1500_.jpg" alt="Image"/>
<h1>what are the 5 top trending vacuum cleaners</h1>
<p>1. Dyson Ball Animal 2
2. Shark Rotator Powered Lift-Away TruePet
3. iRobot Roomba 980
4. Hoover WindTunnel T-Series Rewind Plus
5. Eufy BoostIQ RoboVac 11S</p>
      </div>
    )
  }

  export default VacuumCleaner;

  