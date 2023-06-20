
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
<p>A vacuum cleaner is a device that uses an air pump to create a vacuum, which sucks up dust and dirt, usually from floors, and deposits it into a dust bag or dustbin.</p>
<img src="https://m.media-amazon.com/images/I/61Gd8fvPqqL._AC_SL1500_.jpg" alt="Image"/>
<h1>what are the 5 top trending vacuum cleaners</h1>
<p>1. Dyson Ball Animal 2
2. Shark Rotator Powered Lift-Away TruePet
3. iRobot Roomba 980
4. Neato Botvac Connected
5. Eufy RoboVac 11</p>
        </div>
      </div>
    )
  }

  export default VacuumCleaner;

  