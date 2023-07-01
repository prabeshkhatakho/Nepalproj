
  import './component.css';
  import React from 'react'
  import Navbar from './Navbar'
  import Sidebar from './SideBar'

  function VacuumCleaner() {
    return (
      <div className="locations">
        <Navbar />
        <Sidebar />
        <div className="location">
        
<h1>Tell me about vacuum cleaner</h1>
<p>A vacuum cleaner is a device that uses an air pump to create a partial vacuum to suck up dust and dirt, usually from floors, and from other surfaces such as upholstery and draperies.</p>
<img src="https://m.media-amazon.com/images/I/61Gd8fvPqqL._AC_SL1500_.jpg" alt="Image"/>
<h1>what are the 5 top trending vacuum cleaners</h1>
<p>1. Dyson
2. Shark
3. iRobot
4. Eufy
5. Neato</p>
        </div>
      </div>
    )
  }

  export default VacuumCleaner;

  