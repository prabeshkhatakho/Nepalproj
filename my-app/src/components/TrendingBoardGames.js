
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
<p>There are a few trending board games at the moment. One is Betrayal at Baldur's Gate, which is a cooperative game where players have to work together to survive in a haunted house. Another is Gloomhaven, which is a dungeon crawling game with a unique card-based system. Lastly, there is Root, which is an asymmetrical wargame that pits different factions against each other in an epic struggle for control of a forest.</p>
<img src="https://m.media-amazon.com/images/I/61Gd8fvPqqL._AC_SL1500_.jpg" alt="Image"/>
        </div>
      </div>
    )
  }

  export default TrendingBoardGames;

  