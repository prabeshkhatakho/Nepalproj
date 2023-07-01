
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
<p>A vacuum cleaner is a household appliance that is used to clean floors and upholstery. It typically consists of a canister with a motor and a hose that is attached to a nozzle. The vacuum cleaner sucks up dirt and debris from the floor and traps it in the canister.</p>
<img src="https://m.media-amazon.com/images/I/61Gd8fvPqqL._AC_SL1500_.jpg" alt="Image"/>
<h1>what are the 5 top trending vacuum cleaners</h1>
<p>1. Dyson Ball Animal 2
2. Shark Rotator Powered Lift-Away TruePet
3. iRobot Roomba 980
4. Dyson V6 Absolute
5. Hoover WindTunnel 2 Rewind Pet</p>
        </div>
      </div>
    )
  }

  export default VacuumCleaner;

  