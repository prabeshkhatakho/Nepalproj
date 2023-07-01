
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
<p>Some popular board games that are trending right now are Monopoly, Scrabble, and Risk. These games are all classics that have been around for many years, but they continue to be popular among gamers of all ages. Monopoly is a board game in which players attempt to amass wealth by buying and selling property, while Scrabble is a board game in which players score points by creating words from a set of letter tiles. Risk is a board game in which players attempt to conquer the world by gaining control of territory.</p>
<img src="https://m.media-amazon.com/images/I/61Gd8fvPqqL._AC_SL1500_.jpg" alt="Image"/>
        </div>
      </div>
    )
  }

  export default TrendingBoardGames;

  