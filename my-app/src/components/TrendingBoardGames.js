
  import './component.css';
  import React from 'react'
  import Navbar from './Navbar'
  import Sidebar from './Sidebar'

  function TrendingBoardGames() {
    return (
      <div className="locations">
        <Navbar />
        <Sidebar />
        <div className="location">
        
<h1>tell me about trending board games</h1>
<p>Some popular board games that are trending right now are Betrayal at Baldur’s Gate, Boss Monster, and Codenames. These games are all popular because they are easy to learn and play, and they are also great for groups.</p>
<img src="https://m.media-amazon.com/images/I/61Gd8fvPqqL._AC_SL1500_.jpg" alt="Image"/>
        </div>
      </div>
    )
  }

  export default TrendingBoardGames;

  