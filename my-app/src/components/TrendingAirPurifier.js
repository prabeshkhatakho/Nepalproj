
  import './component.css';
  import React from 'react'
  import Navbar from './Navbar'
  import Sidebar from './Sidebar'

  function TrendingAirPurifier() {
    return (
      <div className="locations">
        <Navbar />
        <Sidebar />
        <div className="location">
        
<h1>tell me about trending air purifier</h1>
<p>One of the most popular air purifiers on the market is the Blueair Classic 605. It is designed to remove 99.97% of airborne particles, including pollen, dust, smoke, and pet dander. The unit also features a filter life indicator to let you know when it's time to replace the filter.</p>
<img src="https://m.media-amazon.com/images/I/61Gd8fvPqqL._AC_SL1500_.jpg" alt="Image"/>
        </div>
      </div>
    )
  }

  export default TrendingAirPurifier;

  