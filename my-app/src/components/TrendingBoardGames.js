
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
<p>Some of the most popular board games right now are Monopoly, Scrabble, and Clue. Other popular games include Settlers of Catan, Ticket to Ride, and Carcassonne.</p>
<img src="https://m.media-amazon.com/images/I/61Gd8fvPqqL._AC_SL1500_.jpg" alt="Image"/>
        </div>
      </div>
    )
  }

  export default TrendingBoardGames;

  