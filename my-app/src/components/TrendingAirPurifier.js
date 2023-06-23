
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
<p>The most popular air purifiers on the market are the ones that can remove the widest range of pollutants, including allergens, smoke, dust, and pet dander. Some air purifiers also come with features like ionizers and UV light filters that can help to remove even more pollutants from the air.</p>
<img src="https://m.media-amazon.com/images/I/61Gd8fvPqqL._AC_SL1500_.jpg" alt="Image"/>
        </div>
      </div>
    )
  }

  export default TrendingAirPurifier;

  