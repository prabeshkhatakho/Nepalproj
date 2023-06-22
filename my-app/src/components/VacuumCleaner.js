
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
<p>A vacuum cleaner is a device that uses an air pump to create a partial vacuum to suck up dust and dirt from floors and other surfaces.</p>
<img src="https://m.media-amazon.com/images/I/61Gd8fvPqqL._AC_SL1500_.jpg" alt="Image"/>
<h1>what are the 5 top trending vacuum cleaners</h1>
<p>The 5 top trending vacuum cleaners are:

1. Dyson V11 Absolute
2. Shark Navigator Lift-Away
3. iRobot Roomba 690
4. Bissell CrossWave
5. Eufy BoostIQ RoboVac</p>
        </div>
      </div>
    )
  }

  export default VacuumCleaner;

  